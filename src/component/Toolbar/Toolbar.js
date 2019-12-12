import React from 'react'
import classes from './Toolbar.css'
import Logo from '../Logo/Logo'
import ToggleButton from './ToggleButton';
import {Link} from 'react-router-dom';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
            <ToggleButton click={props.open}/>
        <div className={classes.Logo}>
            <a> <Link to="/register"> <Logo/> </Link> </a> 
        </div>
        <div className={classes.button}>
             <a href="/login">   <button className={classes.button}>Login</button></a> 
        </div>
    </header>

)

export default toolbar;