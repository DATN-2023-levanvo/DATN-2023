import React from 'react'
import { useGetAllProductQuery } from '../../../Services/Api_Product'
import { Link } from "react-router-dom"
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Loading from '../../Loading';


const Product = () => {
    const { data: productData, isLoading }: any = useGetAllProductQuery()
    let arrayLimitProducts: any = [];
    if (productData && productData.length > 8) {
        arrayLimitProducts.push(
            productData[1],
            productData[2],
            productData[3],
            productData[4],
            productData[5],
            productData[6],
            productData[7],
            productData[8],
        )
    }
    const dataProducts = arrayLimitProducts.length ? arrayLimitProducts : productData;
    // console.log("product: ", productData);
    
    return (
        <div className='w-[90vw] mx-auto'>
            <div className="products-area">
                <div className="container">
                    <div className="products">
                        <div className="row">
                            {/* category */}
                            <div className="col-lg-3">
                                <div className="product-menu">
                                    <div className="menu-title">
                                        <h2>Best seller <strong>Các Mẫu Giày</strong></h2>
                                    </div>
                                    <div className="side-menu">
                                        <ul className="nav tab-navigation" role="tablist">
                                            <li role="presentation">
                                                <a href="#tab5" aria-controls="tab5" role="tab" data-bs-toggle="tab">NIKE</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab6" aria-controls="tab6" role="tab" data-bs-toggle="tab">MLB</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab7" aria-controls="tab7" role="tab" data-bs-toggle="tab">ADIDAS</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab8" aria-controls="tab8" role="tab" data-bs-toggle="tab">VANS</a>
                                            </li>
                                            <li><img src="img/banner/banner-5.jpg" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-9">
                                <div className="row">
                                    
                                </div>
                            </div> */}
                            <div className="flex justify-center flex-wrap col-lg-9 mt-1">
                                {
                                    isLoading ?
                                        <Loading />
                                        :
                                        dataProducts?.map((items: any) => {
                                            return (
                                                <div className="w-[220px] h-[280px] mx-2 mb-5 " key={items._id}>
                                                    <div className="imgPr h-[250px] w-[220px] overflow-hidden">
                                                        <Link to={`/product/${items._id}`}><img className='h-[250px] w-[220px] hover:scale-125 duration-200' src={items.imgUrl[0]} alt="" /></Link>
                                                    </div>
                                                    <div className="content">
                                                        <p className='text-center border-y border-gray-200 mt-1'>{items.name}</p>
                                                        <div className="flex justify-between -mt-3">
                                                            <div className="flex space-x-1">
                                                                <span>{items.original_price}</span>
                                                                <del className='text-xs'> {items.original_price > 0 ? items.price + items.original_price : ""}</del>
                                                                <span> VND</span>
                                                            </div>
                                                            <span>SL: {items.quantity}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
