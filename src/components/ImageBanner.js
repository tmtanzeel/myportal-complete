import React from 'react';

const ImageBanner=()=> {
  return (
    <div>
      <br/>
      <br/>
      <div>
        <img src={require('./usable/coding.png')} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={require('./usable/add.png')} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={require('./usable/eyeglasses.png')} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={require('./usable/add.png')} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={require('./usable/geek.png')} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
export default ImageBanner;
