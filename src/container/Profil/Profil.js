import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import classes from './Profil.css'

class Profil extends Component {
  state = {
      file : [],
      avatar: null,
      disable: false,
      tags: null
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
    console.log('index-images',index);
    const file = [...this.state.file]
    file.splice(index,1);
    this.setState({file:file})


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
                         <p style={{marginTop:'5px'}}>Choisissez dans la liste : </p>
                         <div className={classes.tags}>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Sport
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Humour
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Timide
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                             Musculation
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                             Culture
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Danse
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Natation
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Soiree entre amis
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Musique
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1"/>
                              Voyage
                          </div>
                          <div class="form-col">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
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
                              <input   minLength="2" maxLength="15" required type="email" class="form-control" name="name" placeholder="Nom"/>
                            </div>
                            <div class="form-group col-md-6">
                              <label for="inputPassword4">Prenom</label>
                              <input minLength="2" maxLength="15" required type="password" class="form-control" id="lastname" placeholder="Prenom"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="inputEmail4">mail</label>
                              <input minLength="2" maxLength="15" required type="email" class="form-control" id="mail" placeholder="Mail"/>
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
                        <div class="form-group">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class="form-check-label" for="gridCheck">
                              Check me out
                            </label>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                     </form>
                  </div>

                </div>
            </div>
          </div>
      )
  }
}
export default Profil;

