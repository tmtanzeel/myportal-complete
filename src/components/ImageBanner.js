import React from 'react';

const ImageBanner=()=> {
  return (
    <div>
      <br/>
      <br/>
      <div>
        <img src={require('./usable/coding.png')}/>&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={require('./usable/add.png')}/>&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={require('./usable/eyeglasses.png')}/>&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={require('./usable/add.png')}/>&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={require('./usable/geek.png')}/>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
export default ImageBanner;
