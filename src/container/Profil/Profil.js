import React, { Component } from 'react'
import classes from './Profil.css'

class Profil extends Component {
  state = {
      file : [],
      avatar: null
  }
  handleChange = (e) => {
      let files = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = e => {this.setState({file : [...this.state.file, e.target.result]});}
  }


  displayInAvatar = (img) => {
    console.log(img);
    this.setState({avatar:img})
  }



  render () {
      let image = null;
      
      if (this.state.file.length > 0 && this.state.file.length <6)
          image = (
              <div className={classes.photos_list}>
                  {this.state.file.map((img, i) => {
                      return (< img  className={classes.resize} key={i}src={img} alt={i} onClick={() =>this.displayInAvatar(img)} accept=".png, .jpg, .jpeg"/> )
                  })}
              </div>
          );
      
      let avatar = null;
      if (this.state.avatar != null){
        avatar = <img  style={{borderRadius:'50%',width:'190px',height:'190px'}} src={this.state.avatar} alt='avatar'/>;
      }

      return (
          <div  className={classes.backdrop_profil}>
            <div className={classes.avatar}>
            <p style={{textAlign:'center'}}>Profile de Benoit</p>
                <div className={classes.avatar_photo}>  
                  {avatar}
                  <input style={{marginTop:'200px'}}type='file' onChange={this.handleChange}
                  ref={fileInput => this.fileInput = fileInput}/>  
                  <button> Upload</button>
                </div>
            </div>
              <div >
                  
              </div>
              <div >
                 {image}
              </div> 
          </div>
      )
  }
}
export default Profil;

