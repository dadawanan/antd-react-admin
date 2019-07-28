// import React, { Component } from 'react';
// import  Login  from "./components/login/index";

import React, { Component } from 'react';
import { Layout, } from 'antd';
import Routes from './routes/resolveRoute'
import Siderbar from './components/layout/sideBar'
import Headerbar from './components/layout/headerBar'
import './App.css';

const { Content, Footer } = Layout;
class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return <Layout style={{ height: '100vh' }}>
      <Siderbar collapsed={this.state.collapsed} current={this.props.location.pathname}></Siderbar>
      <Layout>
        <Headerbar props={this.props.location.pathname} />
        {/* <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header> */}
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Routes></Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by 1159827456@qq.com</Footer>
      </Layout>
    </Layout>
  }
}
export default App