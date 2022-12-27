import React from "react";
import { Breadcrumb, Layout, Avatar, theme, Dropdown } from "antd";
import MyMenu from "./meau";
const { Header, Content, Footer } = Layout;

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Login
        </a>
      ),
    },]

const MyLayout = (prop) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <img src="/newlogo.png" className="logo" alt="logo" />
        <Dropdown menu={{
      items,
    }}>
          <Avatar
            className="avatar"
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            Zhu
          </Avatar>
        </Dropdown>

        <MyMenu />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {prop.children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MyLayout;
