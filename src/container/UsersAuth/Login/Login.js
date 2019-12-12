import React, { Component } from 'react'
import classes from '../Register/Register.css'
import * as regex from "../../../component/Utility/Regex"


class Login extends Component {
    state = {
        login: '',
        password: '',
        error: {},
        formvalid: false,
        disable: true
    }

    handleFormValid = () => {
        let store = ''; 
        const error = {...this.state.error};
        const values = Object.values(error)
        for (const key of values)
            store += key;
        Object.keys(error).length===2 && store.length===0? this.setState({disable:false}):this.setState({disable:true});
    }
    handleInputValid = (name_input,value_input) => {
        let error = {...this.state.error};
        switch(name_input){
            case 'login': value_input.match(regex.login) || value_input === '' ? error[name_input]='' : error[name_input] = "*votre login nest pas le bon";
                break;
            case 'password': value_input.match(regex.password) || value_input === '' ? error[name_input]='' : error[name_input] = "Mot-de-passe ne correspond pas";
                break;
            default:
                console.log("NUMBER NOT FOUND");
        }
        this.setState({error:error}, () => {this.handleFormValid()});
    }

    handleInput = (event) => {
        const nameInput = event.target.name;
        const valueInput = event.target.value;
        this.setState({[event.target.name]:event.target.value},
            () => {this.handleInputValid(nameInput,valueInput)    
        });
    }

    handleSubmit =(event) => {
        event.preventDefault(); 
        alert('ok');
    }
     render() {
        return (
            <div className={classes.page}>
                <div className={classes.gauche}>
                <h1> Trouvez Votre Partenaire De Vie</h1>
                <div className={classes.Login}>                    
                   <form className={classes.Form} onSubmit={this.handleSubmit}>
                        <div className={classes.title}>
                            <p>Se connecter</p>
                        </div>

                        <div>
                            <label className={classes.input}>                          
                                <input type="text" name="login" 
                                placeholder="Login" 
                                minLength="2" maxLength="15"
                                onChange={(e)=>this.handleInput(e)}
                                required/>
                                <p className={classes.error}> {this.state.error.login} </p>
                            </label>
                            <label className={classes.input}>
                                <input type="text" name="password" 
                                minLength="6" maxLength="20"
                                placeholder="Password" 
                                onChange={(e)=>this.handleInput(e)}
                                required/>
                                <p className={classes.error}> {this.state.error.password}</p>
                            </label >
                            <div className={classes.mdp}>
                                <a href="/forget-password"> Mot de passe oubliee ? </a>
                            </div>
                            <label>
                            <input type="submit" value="Se connecter" className={classes.button} disabled={this.state.disable}/>
                            </label>
                            <div className={classes.inscrire}>
                                <p> Pas encore inscrit</p> <a href="/register"> S'inscrire</a>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                <div className={classes.droite}>

                </div>

            </div>
        )
    }
}

export default Login;
