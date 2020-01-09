import React, { Component } from 'react'
import { connect } from 'react-redux';

 
import classes from '../Register/Register.css'
import * as regex from "../../../component/Utility/Regex"
import * as actions from '../../store/actions/index'


class Login extends Component {
    state = {
        mail: '',
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
            case 'mail': value_input.match(regex.mail)  || value_input === '' ? error[name_input]='' : error[name_input] = "*votre mail nest pas valid";
                break;
            case 'password': value_input.match(regex.password) || value_input === '' ? error[name_input]='' : error[name_input] = "Mot-de-passe ne correspond pas";
                break;
            default:
                console.log("Unknow value input");
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
        this.props.onAuth(this.state.mail, this.state.password)
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
                                <input type="text" name="mail" 
                                minLength="7" maxLength="25"
                                placeholder="mail" 
                                onChange={(e)=>this.handleInput(e)} 
                                required/>
                                <p className={classes.error}> {this.state.error.mail}</p>
                            </label>
                            <label className={classes.input}>
                                <input type="password" name="password" 
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

const mapStateToProps = state => {
    return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuth: state.auth.token != null
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps) (Login); 