import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import classes from './Profil.css'

import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class Profil extends Component {
  state = {
      file : [],
      value: {},
      avatar: null,
      disable: false,
      tag: [],
      currentData: 0,
      limit: 5
  }

componentDidMount () {
    this.setState({value:this.props.user} ,() => {
      console.log('valuuuuueeee',this.state.value)
    })

}


  handleChange = (e) => {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = e => {this.setState({file : [...this.state.file, e.target.result]});}
  }



  displayInAvatar = (img) => {
    console.log(img);
    this.setState({avatar:img})
  }

  deleteImages = (index) => {
    const file = [...this.state.file]
    file.splice(index,1);
    this.setState({file:file})


  }

  handleCheck = (event) => {
    
    let selected = event.target.checked;
    if (selected) {
      if (this.state.currentData < this.state.limit) 
      {
        this.setState({ currentData: this.state.currentData + 1, tag:[...this.state.tag,event.target.id]} ,()=> {console.log(this.state.tag)});
      } 
      else 
      {
        event.target.checked = false;
      }
    } 
    else {
      const remove = [...this.state.tag]
      let index = remove.indexOf(event.target.id);
      if (index !== -1) remove.splice(index, 1);
      this.setState({ currentData: this.state.currentData - 1, tag:remove}, () => { console.log(this.state.tag)})
        ;
    }


  }

  render () {
      let image = null;
      let disable = this.state.disable;


      if (this.state.file.length >= 0){
        image = (
          <div className={classes.photos_list}>
              {this.state.file.map((img, i) => {
                  return ( <div style={{display:'flex', flexDirection:'row'}}>
                     <img  className={classes.resize} key={i}src={img} alt={i} onClick={() =>this.displayInAvatar(img)} accept=".png, .jpg, .jpeg"/>
                     <button className={classes.remove_image}  onClick={()=>this.deleteImages(i)}>&#215;</button> 
                    </div>
                    )
              })}
          </div>
      );}

      if (this.state.file.length>=5){
          disable = true
      }
            
      let avatar = <div className={classes.avatar_photo}>  </div>;

      if (this.state.avatar != null){
        avatar = <img   className={classes.avatar_photo} src={this.state.avatar} alt='avatar'/>;
      }

      return (
          <div  className={classes.backdrop_profil}>           
            <div className={classes.photo}> 
                    {avatar}                   
                    <div  className={classes.buttons_group}>
                      <input style={{display:'none'}}type='file' onChange={this.handleChange}
                        ref={fileInput => this.fileInput = fileInput} /> 
                        <Button   onClick={() => this.fileInput.click()} disabled={disable}> Choose file</Button> 
                        <Button   variant="warning">Upload</Button>
                    </div>
                      {image}
                      <div className={classes.voir_profil}>
                            <a href="/profil">   <button className={classes.button}>Voir profil</button></a>
                      </div>
            </div>
            <div className={classes.moitier}>

                <div className={classes.moitier_gauche}>  
                    <div className={classes.block_tags}>
                         <h4> Ce que j'aime... </h4>
                         <p style={{marginTop:'5px'}}>Choisissez dans la liste <strong> 5 </strong> preferences: </p>
                         <div className={classes.tags}>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"   onChange={(e)=>this.handleCheck(e)}/>
                            <label class="form-check-label" for="defaultCheck1" />
                              Sport
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" onChange={(e)=>this.handleCheck(e)}/>
                            <label class="form-check-label" for="defaultCheck2"/>
                              Humour
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" onChange={(e)=>this.handleCheck(e)} />
                            <label class="form-check-label" for="defaultCheck3"/>
                              Timide
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" onChange={(e)=>this.handleCheck(e)} />
                            <label class="form-check-label" for="defaultCheck4"/>
                             Musculation
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck5" onChange={(e)=>this.handleCheck(e)} />
                            <label class="form-check-label" for="defaultCheck5"/>
                             Culture
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck6"  onChange={(e)=>this.handleCheck(e)} />
                            <label class="form-check-label" for="defaultCheck6"/>
                              Danse
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck7" onChange={(e)=>this.handleCheck(e)} />
                            <label class="form-check-label" for="defaultCheck1"/>
                              Natation
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck8"  onChange={(e)=>this.handleCheck(e)}/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Soiree entre amis
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck9" onChange={(e)=>this.handleCheck(e)}/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Musique
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck10"onChange={(e)=>this.handleCheck(e)}/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Voyage
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck11"onChange={(e)=>this.handleCheck(e)}/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Mode
                          </div>
                         </div>
                    </div>
                </div>

                <div className={classes.moitier_droite}>
                  <div className={classes.form}>
                     <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="inputEmail4">Nom</label>
                              <input   minLength="2" maxLength="15" required type="name"  value={this.state.value.firstName} class="form-control" name="name" placeholder="Nom"/>
                            </div>
                            <div class="form-group col-md-6">
                              <label for="inputPassword4">Prenom</label>
                              <input minLength="2" maxLength="15" required type="lastname" value={this.state.value.lastName} class="form-control" id="lastname" placeholder="Prenom"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="inputEmail4">mail</label>
                              <input minLength="2" maxLength="15" required type="email"  value={this.state.value.mail} class="form-control" id="mail" placeholder="Mail"/>
                            </div>
                            <div class="form-group col-md-6">
                              <label for="inputPassword4">Password</label>
                              <input minLength="2" maxLength="15" required type="password" class="form-control" id="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div class="form-group">
                          <label for="inputAddress">Address</label>
                          <input minLength="2" maxLength="15" required type="text" class="form-control" id="login" placeholder="1234 Main St"/>
                        </div>
                        <div class="form-group">
                          <label for="inputAddress2">Address 2</label>
                          <input  required type="text" class="form-control" id="Address" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="inputState">Orientation sexuel</label>
                            <select id="inputState" class="form-control">
                              <option selected>Choose...</option>
                              <option>Hetero</option>
                              <option>BI</option>
                              <option>Gay</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6">
                           <label  for="inputState">Genre</label>
                            <select id="inputState" class="form-control">
                              <option selected>Choose...</option>
                              <option>Homme</option>
                              <option>Femme</option>
                              <option>Trans</option>
                            </select>
                          </div>
                        </div>
                        <br></br>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                     </form>
                  </div>

                </div>
            </div>
          </div>
      )
  }
}



const mapStateToProps = state => {
  return {
    user:state.auth.user
  };
};


export default withRouter(connect(mapStateToProps) (Profil)); 







