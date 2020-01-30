import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import classes from './Profil.css'

class Profil extends Component {
  state = {
      file : [],
      avatar: null,
      disable: false
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
                            <form>
                            <button type="checkbox" name="gender" value="male" checked> amour </button>
                            </form>    
                         </div>

                    </div>
                  
                </div>

                <div className={classes.moitier_droite}>
                     
                     <div className={classes.form}>
                          <div>  
                             
                          </div>



                     </div>

                </div>


            </div>
          </div>
      )
  }
}
export default Profil;

