import React from 'react'
import classes from './Profil.css'
import { FiSend } from "react-icons/fi";
import Progress from 'react-circle-progress-bar'



const Profil = (props) => (
    
    <div className={classes.Profil}>
        <div className={classes.gauche}>
            <div className={classes.description_gauche}> 
                            <div className={classes.identite}>
                                {/* <h5> mehdi el kaddouri</h5> */}
                                <h1> Mehdi93400</h1>
                                {/* <h6> 50 ans, Paris 7e arrondissement </h6> */}
                                {/* <h6> Genre</h6> */}
                                <h7> Connectée il y a moins de 24 heures</h7>
                                {/* <p>  Parisienne - Sports - Théâtre - Cinéma - Expos</p> */}

                                <p></p>
                            </div>   
                            <div className={classes.block_progress_bar}>
                                <div >
                                    <Progress progress={80}
                                    
                                        hideValue= {true}
                                        subtitle={'Sccore de 78'}
                                        strokeWidth={'15'}
                                        reduction={'0.25'}
                                        transitionDuration={'3.9'}
                                        transitionTimingFunction={'ease'}
                                        background={'#d5d5e8'}
                                       
                                        />
                                </div> 
                           </div>

                            <div className={classes.block_photo}>
                                    <div className={classes.photo}> 
                                       Emplacement photo
                                    </div>
                            </div>   
                                <div className={classes.block_button}>
                                <button> &#9825; Like me </button>    
                                <button>   <FiSend>  </FiSend> Chattez  </button>  
                            </div>   
            </div>
        </div>
        <div className= {classes.droite}>
            <div className= {classes.gallery}>
                <h5> Mes Photos </h5> 
                <div className={classes.gallery_photo}>
                    <div>ffff</div>
                    <div>fff</div>
                    <div>fff</div>
                    <div>fff</div>
                    <div>ffff</div>
                </div>
            </div>


        </div>
    </div>
)

export default Profil;
