import React, { useEffect, useState } from "react"
import {
  GoldOutlined,
  PieChartOutlined,
  UserOutlined,
  HddOutlined,
  FormatPainterOutlined,
  DeploymentUnitOutlined,
  BarChartOutlined,
  EditOutlined,
  HomeOutlined,
  ContainerOutlined,
  PicCenterOutlined,
  CalendarOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Breadcrumb, Layout, Menu, theme } from "antd"
import { Outlet, Link } from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  url?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label: url ? <Link to={url}>{label}</Link> : label,
  } as MenuItem
}

const user = JSON.parse(localStorage.getItem("user") || "{}")

const isStaff = user?.role === "staff"

const items: MenuItem[] = [
  getItem('Tổng quan', '0', <HomeOutlined />, undefined, '/admin'),
  getItem("Thống kê", "1", <BarChartOutlined />, [
    getItem("Doanh thu", "2", <FormatPainterOutlined />, undefined, "/admin/revenue-statistics"),
    getItem("Sản phẩm đã bán", "3", <PieChartOutlined />, undefined, "/admin/product-statistics"),
    getItem("Trạng thái đơn hàng", "4", <PieChartOutlined />, undefined, "/admin/statusPr"),
    getItem("Top 10 Sản Phẩm", "5", <PieChartOutlined />, undefined, "/admin/top10-product"),
  ]),
  getItem("Kho", "sub1", <HddOutlined />, [
    getItem(
      "Sản phẩm",
      "5",
      <DeploymentUnitOutlined />,
      undefined,
      "product/list"
    ),
    getItem("Màu", "6", <FormatPainterOutlined />, undefined, "color/list"),
    getItem("Kích thước", "7", <PieChartOutlined />, undefined, "size/list"),
    getItem(
      "Khôi phục sản phẩm",
      "8",
      <ContainerOutlined />,
      undefined,
      "restore-product-data"
    ),
  ]),
  getItem('Bình luận', '9', <EditOutlined />, undefined, 'comment/list'),
  getItem('Danh mục', '10', <GoldOutlined />, undefined, 'category/list'),
  getItem('Tài khoản', '11', <UserOutlined />, undefined, 'user/list'),
  getItem('Hóa đơn', '12', <HddOutlined />, undefined, 'bill/list'),
  getItem('Banner', '13', <PicCenterOutlined />, undefined, 'slide/list'),
  // getItem("New Sletter", "10", <MailOutlined />, undefined, "new-sletter/list"),
  getItem("Mã giảm giá", "14", <MenuOutlined />, undefined, "discount/list"),
  getItem("Bản tin", "15", <MailOutlined />, undefined, "new-sletter/list"),
  getItem("Nhật ký web", "16", <CalendarOutlined />, undefined, "blog/list"),
];

const Layout_Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken()


  return (
    <div className="nav-left">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
        style={{position:"fixed", zIndex:2,height: "100vh"}}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <div className="flex justify-center">
            <a href={`/`}>
              <HomeOutlined className="scale-125 hover:scale-150 mx-auto mt-3" />
            </a>
          </div>
          <hr />
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={isStaff ? items.filter((item: any) => item.key !== 'sub1' && item.key !== '6' && item.key !== '7') : items} />
        </Sider>
        <Layout>
          <Header className="headerAdmin" style={{ height:80,width:"100%"}} >

          </Header>
          <div className="h-20"></div>
          <Content className="" style={{margin:"0 0 0 200px"}}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Bảng</Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </div>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    </div>
  )
}

export default Layout_Admin
