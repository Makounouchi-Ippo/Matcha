import React, {Component} from 'react'
import classes from './Toolbar.css'
import Logo from '../Logo/Logo'
import ToggleButton from './ToggleButton';

import {Link} from 'react-router-dom';
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


class toolbar extends Component {

render () {

    let items = (
        <header className={classes.Toolbar}>
            <ToggleButton click={this.props.open}/>
            <div className={classes.Logo}>
                <a> <Link to="/register"> <Logo/> </Link> </a> 
            </div>
            <div className={classes.button}>
                <a href="/login">   <button className={classes.button}>Login</button></a> 
            </div>
        </header>
    )

    if (this.props.isAuth){
        items = (
        <header className={classes.Toolbar2}>
            <ToggleButton click={this.props.open}/>
            <div className={classes.Logo}>
                <a> <Link to="/register"> <Logo/> </Link> </a> 
            </div>
            <div className={classes.button2}>
                <a href="/login">   <button className={classes.button}>Deconnexion</button></a> 
                <a href="/profil">   <button className={classes.button}>Profil</button></a> 
                <a href="/Peoplw">   <button className={classes.button}>People</button></a> 
                <a href="/motfication">   <button className={classes.button}>Notification</button></a> 

            </div>
        </header>
        )
    }

    return (
        <div>
             {items}
        </div>
       
    )
}
}
    

const mapStateToProps = state => ({
    isAuth: state.auth.token !== null,
    loading: state.auth.loading
});

export default withRouter(connect(mapStateToProps)(toolbar));