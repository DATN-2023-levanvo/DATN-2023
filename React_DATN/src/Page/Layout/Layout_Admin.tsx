import React, { useState } from "react"
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
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';

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

const user = JSON.parse(localStorage.getItem('user') || '{}');

const isStaff = user?.role === "staff";

const items: MenuItem[] = [
  getItem("Thống kê", "0", <BarChartOutlined />, undefined, "/admin"),
  getItem("Kho", "sub1", <HddOutlined />, [
    getItem(
      "Sản phẩm",
      "1",
      <DeploymentUnitOutlined />,
      undefined,
      "product/list"
    ),
    getItem("Màu", "2", <FormatPainterOutlined />, undefined, "color/list"),
    getItem("Kích thước", "3", <PieChartOutlined />, undefined, "size/list"),
    getItem(
      "Khôi phục sản phẩm",
      "4",
      <ContainerOutlined />,
      undefined,
      "restore-product-data"
    ),
  ]),
  getItem('Bình luận', '5', <EditOutlined />, undefined, 'comment/list'),
  getItem('Danh mục', '6', <GoldOutlined />, undefined, 'category/list'),
  getItem('Users', '7', <UserOutlined />, undefined, 'user/list'),
  getItem('Bill', '8', <HddOutlined />, undefined, 'bill/list'),
  getItem('Slide', '9', <PicCenterOutlined />, undefined, 'slide/list'),
  getItem("New Sletter", "10", <MailOutlined />, undefined, "new-sletter/list"),
];

const Layout_Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <div className="nav-left">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <div className="flex justify-center">
            <a href={`/`}><HomeOutlined className="scale-125 hover:scale-150 mx-auto mt-3" /></a>
          </div>
          <hr />
          {/* <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} /> */}
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={isStaff ? items.filter((item:any) => item.key !== 'sub1' && item.key !== '6' && item.key !== '7') : items} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
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
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default Layout_Admin
