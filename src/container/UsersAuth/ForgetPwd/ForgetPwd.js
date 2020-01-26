import React, { Component } from 'react'
import classes from '../Register/Register.css'
import * as regex from "../../../component/Utility/Regex"


class ForgetPwd extends Component {
    state = {
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
        Object.keys(error).length===1 && store.length===0? this.setState({disable:false}):this.setState({disable:true});
    }
    handleInputValid = (name_input,value_input) => {
        let error = {...this.state.error};
        switch(name_input){
            case 'mail': value_input.match(regex.mail)  || value_input === '' ? error[name_input]='' : error[name_input] = "*votre mail nest pas valid";
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
     render() {
        return (
            <div className={classes.page}>
                <div className={classes.gauche}>
                <h1> Trouvez Votre Partenaire De Vie</h1>
                <div className={classes.Forgetpwd}>                    
                   <form className={classes.Form} onSubmit={this.handleSubmit}>
                        <div className={classes.title}>
                            <p>Mot De Passe Oublie</p>
                        </div>
                        <div>
                            <label className={classes.input}>                          
                                <input type="text" name="mail" 
                                placeholder="mail" 
                                minLength="2" maxLength="15"
                                onChange={(e)=>this.handleInput(e)}
                                required/>
                                <p className={classes.error}> {this.state.error.mail}</p>
                            </label>
                            <label>
                            <input type="submit" value="Valider" className={classes.button} disabled={this.state.disable}/>
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

export default ForgetPwd;
