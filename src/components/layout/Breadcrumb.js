import React, { Component } from 'react'
import { Breadcrumb, Menu } from 'antd';
import route from '../../routes/route'
import { Link } from 'react-router-dom'

class Breadcrumbs extends Component {
  componentDidMount() {
  }
  render() {
    let crumbs = this.props.props.split('/')
    let crumb = crumbs[0] + '/' + crumbs[1] + '/' + crumbs[2]
    let menus = [], title = '', subtitle = '', menu = {}, state = true
    route.menus.map(item => {
      if (item.id === crumb) {
        menus = item.children;
        title = item.title
      }
      return false
    })
    if (menus) {
      menu = (
        <Menu>
          {menus.map((item, index) => {
            if (item.id === this.props.props) {
              subtitle = item.title
            }
            return (
              <Menu.Item key={index}>
                <Link rel="noopener noreferrer" to={item.id}>
                  {item.title}
                </Link>
              </Menu.Item>
            )
          }
          )}
        </Menu>
      );
    } else {
      state = false
    }
    if (state) {
      return <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={"/app/index"}>首页</Link> </Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu}>{title}</Breadcrumb.Item>
        <Breadcrumb.Item>{subtitle}</Breadcrumb.Item>
      </Breadcrumb>
    } else {
      return <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={"/app/index"}>首页</Link> </Breadcrumb.Item>
        {title === '首页' ? [] : <Breadcrumb.Item>{title}</Breadcrumb.Item>}
      </Breadcrumb>
    }
  }
}
export default Breadcrumbs