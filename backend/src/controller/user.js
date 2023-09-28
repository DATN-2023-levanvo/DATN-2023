import bcrypt from "bcryptjs"
import User from "../models/user.js";
import jwt  from "jsonwebtoken";
import { signupSchema, signinSchema } from "../schema/user.js";
import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const { EMAIL } = process.env
const { PASSWORD_EMAIL } = process.env

export const signup = async (req, res) => { 
    try {
      const { username, email, password } = req.body;
      const {error} = signupSchema.validate(req.body, {abortEarly:false})
      if(error){
        const errDetails = error.details.map((err) => err.message)
        return res.status(400).json({
            message: errDetails
        })
      }
      const checkEmail = await User.findOne({ email });
      if (checkEmail) {
        return res.status(400).json({
          message: "Email đã tồn tại",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        username,
        password: hashedPassword,
      });
      if (!newUser) {
        return res.status(400).json({
          message: "Đăng ký không thành công",
        });
      }
      newUser.password = undefined;
      return res.status(200).json({
        message: "Đăng ký thành công",
        newUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };


  // Đăng nhập
export const signin = async (req,res) => {
  try {
    const {email, password} = req.body
    const {error} = signinSchema.validate(req.body, {abortEarly:false})
    if(error){
      const errDetails = error.details.map((err) => err.message)
      return res.status(400).json({
          message: errDetails
      })
    }
    const checkUser = await User.findOne({email})
    if(!checkUser){
      return res.status(400).json({
        message: "Tài khoản không tồn tại"
      })
    }
    const checkPass = await bcrypt.compare(password, checkUser.password)
    if(!checkPass){
      return res.status(400).json({
        message: "Mật khẩu không chính xác"
      })
    }
    const token = jwt.sign({_id : checkUser.id}, "sneakers", {expiresIn: "2h"})
    checkUser.password = undefined
    return res.status(200).json({
      message: "Đăng nhập thành công",
      accessToken: token,
      user: checkUser 
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

// Hàm random password 
export const randomPassword = () => {
  const length = 6
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let newPass = ""
  for (let i = 0; i < length; i++) {
    const randomPass = Math.floor(Math.random() * charset.length)
    newPass += charset.charAt(randomPass)
  }
  return newPass
}

// Phương thức gửi đi
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${EMAIL}`,
    pass: `${PASSWORD_EMAIL}`
  }
})


// Lấy mã xác minh bằng email

const confirmationCodes = {};   // confirmationCodes lưu mã xác thực tạm thời
export const forgotPassword = async (req,res) => {

  try {
    const {email} = req.body;
    const checkUser = await User.findOne({email})
    if(!checkUser){
      return res.status(400).json({
        message: "Tài khoản của bạn không tồn tại"
      })
    }

     // tạo mã xác thực gồm 6 số ngẫu nhiên
     const verificationCodes = Math.floor(100000 + Math.random() * 900000);

     // thực hiện gửi email
    try {
      await transporter.sendMail({
        from: 'traidepvietnam2000@gmail.com',
        to: `${email}`,
        subject: 'Mã xác thực',
        text: `Mã xác nhận của bạn là: ${verificationCodes}`,
      });

    
      const timestamp = Date.now(); // tạo thời gian thực cho mã xác thực tính từ khi tạo thành công
      confirmationCodes[email] = { code: verificationCodes, timestamp };
      return res.status(201).json({
        message: "Bạn vui lòng kiểm tra email để lấy mã xác thực"
      })
    } catch (error) {
      return res.status(400).json({
        message: `Lỗi khi gửi email: ${error.message}`
      })
    }
    
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}


// lấy mật khẩu bằng email
export const verifyConfirmationCode = async (req, res) => {
  try {
    const { email, code } = req.body;
    const storedCode = confirmationCodes[email];
    const user = await User.findOne({email})

  // Chuyển đổi mã xác minh và mã đã lưu thành số để so sánh
  const numericCode = parseInt(code, 10);    // parseInt chuyển từ chuỗi sang số
  const storedNumericCode = storedCode ? parseInt(storedCode.code, 10) : null;

  if (!storedCode || storedNumericCode !== numericCode) {
    return res.status(400).json({
      message: "Mã xác nhận không hợp lệ",
    });
  }

    // Check if the code has expired (e.g., 2 minutes)
    const currentTime = Date.now();
    const codeTimestamp = storedCode.timestamp;
    const codeExpiration = 2 * 60 * 1000; // 2 minutes in milliseconds

    if (currentTime - codeTimestamp > codeExpiration) {
      return res.status(400).json({
        message: "Mã xác nhận đã hết hạn",
      });
    }

    // Generate a new random password, hash it, and update the user's password
    const newPassword = randomPassword();
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    

    // Send the new password to the user's email
    await transporter.sendMail({
      from: "traidepvietnam2000@gmail.com",
      to: `${email}`,
      subject: "Password Reset",
      text: `Mật khẩu mới của bạn là: ${newPassword}`,
    });

    delete confirmationCodes[email];
    await user.save();
    return res.status(200).json({
      message: "Bạn vui lòng kiểm tra email để nhận lại mật khẩu",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


// Đổi mật khẩu
export const changePassword = async (req,res) => {
  try {

    const {email, password, newPassword } = req.body;
    const user = await User.findOne({email})

    if(!user){
      return res.status(400).json({
        message: "Tài khoản không tồn tại"
      })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Mật khẩu hiện tại không chính xác' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({ message: 'Đổi mật khẩu thành công' });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

