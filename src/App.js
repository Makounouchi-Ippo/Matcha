import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './component/layout/Layout'
import Register from './container/UsersAuth/Register/Register'
import EditProfil from './container/Profil/EditProfil'
import Login from './container/UsersAuth/Login/Login'
import ForgetPwd from './container/UsersAuth/ForgetPwd/ForgetPwd'
import Profil from './container/Profil/Profil'
import Home from './container/Home/Home'
//mport NotFound from './component/Errror/Error'
import * as actions from './container/store/actions/index'


class App extends Component {

  state = {
    token:''
  }

   componentDidMount () {
     this.props.onTryAutoSignup();
     let token = localStorage.getItem('token');
     this.setState({token:token}) 
  }

  render() {

    let routes = (
      <Switch>
      <Route  path="/register"  component={Register} /> 
      <Route  path="/login" component={Login} />
       <Route path="/forget-password" exact component={ForgetPwd} /> 
       <Redirect to="/register"/>
      </Switch>
    )

    if (this.props.token)
    {
      routes= (
        <Switch>
        <Route path="/edit-profil" component={EditProfil}/>
        <Route path="/profil" component={Profil}/>
        <Route path="/home" component={Home}/> 
        <Redirect to="/edit-profil"/>
        </Switch>
      )
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token !== null
});

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));