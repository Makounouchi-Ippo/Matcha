import React from 'react'
import Spinner from '../../component/UI/Spinner/Spinner'

export default props => 
  props.images.map((image, i) =>
    <div key={i} className='fadein'>
      <div 
        onClick={() => props.removeImage(image.public_id)} 
        className='delete'
      >
        <Spinner  size='2x' />
      </div>
      <img src={image.secure_url} alt='' />
    </div>
  )