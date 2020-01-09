import React, { Component } from 'react'
import axios from 'axios';

import classes from "./Register.css"
import * as regex from "../../../component/Utility/Regex"

export default class UsersAuth extends Component {
    state = {
        name:'',
        lastname: '',
        mail: '',
        login: '',
        password: '',
        error: {},
        formvalid: false,
        disable: true
    }

    handleFormValid = () => {
        console.log('eror ===',this.state.error);
        let store = ''; 
        const error = {...this.state.error};
        const values = Object.values(error)
        for (const key of values)
            store += key;
        Object.keys(error).length===5 && store.length===0? this.setState({disable:false}):this.setState({disable:true});
    }
    handleInputValid = (name_input,value_input) => {
        let error = {...this.state.error};
        switch(name_input){
            case 'name': value_input.match(regex.name) ? error[name_input]='' : error[name_input] = "*votre nom nest pas valid";
            break;
            case 'lastname': value_input.match(regex.lastname) ? error[name_input]='' : error[name_input] = "*votre prenom nest pas valid";
            break;
            case 'mail': value_input.match(regex.mail)  || value_input === '' ? error[name_input]='' : error[name_input] = "*votre mail nest pas valid";
                break;
            case 'login': value_input.match(regex.login) || value_input === '' ? error[name_input]='' : error[name_input] = "*votre login nest pas valid";
                break;
            case 'password': value_input.match(regex.password)  ? error[name_input]='' : error[name_input] = "*Au moins: 1Min, 1Maj et 1chiffre ";
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
        this.setState({loading: true});
        const value = {}
         axios.post('http://localhost:3000/api/user/signup', this.state.values)
             .then(response => {
        this.setState({loading: false}); 
        this.setState({reponseServeur: response.data.message});
         })
              .catch(error => {
        this.setState({loading: false});
        this.setState({reponseServeur: error.response.data.message});
      });
    }
    
    render() {

        return (
            <div className={classes.page}>
                <div className={classes.gauche}>
                <h1> Trouvez Votre Partenaire De Vie </h1>
                <h2 className={classes.h2}>Rejoignez des milliers de célibataires en vous inscrivant gratuitement sur Matcha !</h2>
                <div className={classes.UsersAuth}>                    
                   <form className={classes.Form} onSubmit={this.handleSubmit}>
                        <div className={classes.title}>
                            <p>Inscription</p>
                        </div>

                        <div>
                            <label className={classes.input}>
                                <input type="text" name="name" 
                                minLength="2" maxLength="15"
                                placeholder="name"
                                onChange={(e) =>this.handleInput(e)}
                                required/><p  className={classes.error}>{this.state.error.name}</p>
                            </label>

                            <label className={classes.input}>                           
                                <input type="text" name="lastname"
                                minLength="2" maxLength="15"
                                placeholder="lastname" 
                                onChange={(e)=>this.handleInput(e)}
                                required/>
                                <p className={classes.error}>{this.state.error.lastname}</p>
                            </label>
                            <label className={classes.input}>                         
                                <input type="text" name="mail" 
                                minLength="7" maxLength="25"
                                placeholder="mail" 
                                onChange={(e)=>this.handleInput(e)} 
                                required/>
                                <p className={classes.error}> {this.state.error.mail}</p>
                            </label>
                            <label className={classes.input}>                          
                                <input type="text" name="login" 
                                minLength="2" maxLength="15"
                                placeholder="login" 
                                onChange={(e)=>this.handleInput(e)}
                                required/>
                                <p className={classes.error}> {this.state.error.login}</p>
                            </label>
                            <label className={classes.input}>
                                <input type="password" name="password"
                                minLength="6" maxLength="20"
                                placeholder="password" 
                                onChange={(e)=>this.handleInput(e)}
                                required/>
                                <p className={classes.error}>{this.state.error.password}</p>
                            </label >
                            <label>
                            <input type="submit" value="S'inscrire" className={classes.button} disabled={this.state.disable}/>
                            </label>
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

