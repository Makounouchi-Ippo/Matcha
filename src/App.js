import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './component/layout/Layout'
import Register from './container/UsersAuth/Register/Register'
import Login from './container/UsersAuth/Login/Login'
import ForgetPwd from './container/UsersAuth/ForgetPwd/ForgetPwd'
import NotFound from './component/Errror/Error'


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Switch>
                <Route path="/Register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/forget-password"  exact component={ForgetPwd} />
                <Route component={NotFound}/>
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
