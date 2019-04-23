import React from 'react';
import NavBar from './NavBar';
import ImageBanner from './ImageBanner';
import CodeBanner from './CodeBanner';
import TutorialFrame from './TutorialFrame';
import Footer from './Footer';

const Tutorials=()=> {
  return (
    <div>
      <NavBar/>
      <ImageBanner/>
      <CodeBanner/>
      <TutorialFrame/>
      <br/><br/>
      <Footer/>  
    </div>
  );
}
export default Tutorials;
