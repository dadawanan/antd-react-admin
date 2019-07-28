/*布局文件路由的处理
*/
import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import allComponents from './index'
import router from './route'
export default class resolveRoute extends Component {
    render() {
        return (
            <Switch>
                {
                    router.menus.map(item => {
                        if (item.children) {
                            return item.children.map(
                                itemChildren => {
                                    const Component = allComponents[itemChildren.component]
                                    return (<Route path={itemChildren.id}
                                        key={itemChildren.id}
                                        render={() => {
                                            document.title = itemChildren.title
                                            return <Component></Component>
                                        }}></Route>)
                                }
                            )
                        }
                        else {
                            const Component = allComponents[item.component]
                            return (<Route path={item.id}
                                key={item.id}
                                render={() => {
                                    document.title = item.title
                                    return <Component></Component>
                                }}></Route>)
                        }
                    }
                    )
                }
                <Route render={() => {
                    document.title = '页面未找到'
                    return <Redirect to='/404'></Redirect>
                }
                }></Route>

            </Switch>
        )
    }
}