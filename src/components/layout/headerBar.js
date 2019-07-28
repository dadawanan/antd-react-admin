/*侧边栏的渲染
*/
import React, { Component } from 'react'
import { Layout, Menu, Icon, Dropdown } from 'antd'
import Breadcrumb from './Breadcrumb'
import { Link } from 'react-router-dom'
const { Header } = Layout

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/app/index">首页</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">github地址</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">退出登入</Menu.Item>
  </Menu>
);

class Headerbar extends Component {
  state = {
    isFullScreen: false
  }
  componentDidMount() {
    //this.watchFullScreen()
  }
  fullScreen = () => {
    if (!this.state.isFullScreen) {
      this.requestFullScreen();
    } else {
      this.exitFullscreen();
    }
  };
  //进入全屏
  requestFullScreen = () => {
    var de = document.documentElement;
    this.setState({
      isFullScreen: true
    });
    if (de.requestFullscreen) {
      de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
      de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
      de.webkitRequestFullScreen();
    }
  };
  //退出全屏
  exitFullscreen = () => {
    this.setState({
      isFullScreen: false
    });
    var de = document;
    if (de.exitFullscreen) {
      de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
      de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
      de.webkitCancelFullScreen();
    }
  };

  render() {
    return <Header style={{ background: '#fff', padding: 0, boxShadow: '0 1px 4px rgba(0,21,41,.08)' }}>
      <Breadcrumb props={this.props.props}></Breadcrumb>
      <div style={{ display: 'inline-block', float: 'right' }}>
        <div className='Iconstyle' onClick={this.fullScreen}>
          <div>
            {this.state.isFullScreen ? <Icon type="fullscreen-exit" /> : <Icon type="fullscreen" />}
          </div>
        </div>
        <Dropdown overlay={menu} trigger={['click']} placement='bottomCenter'>
          <Link className="ant-dropdown-link dropdownstyle" to=''>
            <img src='https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80' alt='我的'
              style={{ cursor: 'pointer', width: '40px', height: '40px', borderRadius: '10px' }}></img>
            <Icon type="caret-down" className='creat-bottom' />
          </Link>
        </Dropdown>
      </div>

    </Header>
  }

}
export default Headerbar
