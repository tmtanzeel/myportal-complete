import React from 'react';
import './css/TextBox.css';

const TextBox=(props)=> {
  return(
    <input type="text" className='text-box' onChange={props.change}/>
  );
}
export default TextBox;
