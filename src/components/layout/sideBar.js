/*侧边栏的渲染
*/
import React,{Component} from 'react'
import {Layout,Menu,Icon} from 'antd'
import { withRouter,Link} from 'react-router-dom'
import routers from '../../routes/route'
import SubMenu from 'antd/lib/menu/SubMenu';

const {Sider}=Layout

class Sidebar extends Component {
    
    state={
        mode:'inline',
        selectedKey:'',
        firstHide:true,
        currentUrl : this.props.someThings,
        currentMenu:''
    }
    componentDidMount(){
        let url = this.props.location.pathname,
        current = url.split('/')
        let currentMenu=current[0]+'/'+current[1]+'/'+current[2]
        this.setState({
            currentUrl: url,
            currentMenu
        });
    }
    handleSelectKey(item){
        this.setState({
          currentUrl: item.key
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({currentUrl: nextProps.current});
    }
    openmenu = v =>{
        this.setState({
            currentMenu:v[v.length-1]
        })
    }
    render(){
        const {collapsed}=this.state
        return (
        <Sider
        trigger={null}
        breakpoint='lg'
        collapsed={collapsed}
        style={{overflowY:'auto'}}
        >
            <div className='logo'>
                
            </div>
                <Menu theme="dark" mode="inline" 
                selectedKeys={[this.state.currentUrl]} 
                openKeys={[this.state.currentMenu]}  
                onOpenChange={this.openmenu}
                onSelect={(item)=>this.handleSelectKey(item)}>
                {
                    routers.menus.map(item=>
                      item.children?(
                            <SubMenu key={item.id} title={<span>
                                <Icon type={item.icon}></Icon>
                                <span>{item.title}</span>
                            </span>}>
                                {item.children.map(childrenItem=>(
                                    <Menu.Item key={childrenItem.id}>
                                    <Link to={childrenItem.id}>
                                    {childrenItem.title}
                                    </Link>   
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                   ):(
                    <Menu.Item key={item.id}>
                    <Link to={item.id}>
                    <Icon type={item.icon} />
                    <span className="nav-text">{item.title}</span>
                    </Link>
                </Menu.Item>
                )
                )
                }
                </Menu>
            }
            
        </Sider>)
    }
}
export default withRouter(Sidebar)