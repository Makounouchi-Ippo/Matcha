import React from 'react'
import Spinner from '../../component/UI/Spinner/Spinner';
export default props => 
  <div className='buttons fadein'>
    <div className='button'>
      <label htmlFor='single'>
        <Spinner color='#3B5998' size='10x' />
      </label>
      <input type='file' id='single' onChange={props.onChange} /> 
    </div>
    
    <div className='button'>
      <label htmlFor='multi'>
        <Spinner  color='#6d84b4' size='10x' />
      </label>
      <input type='file' id='multi' onChange={props.onChange} multiple />
    </div>
  </div>