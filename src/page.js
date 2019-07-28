import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/login/index'
import App from './App'

export default () => (
    <Router>
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/app/index' push></Redirect>}></Route>
            <Route path='/app' component={App}></Route>
            <Route path='/login' component={Login}></Route>
        </Switch>
    </Router>
)