import React from 'react';
import './css/LinuxFaq.css';
import NavBar from './NavBar';
import ArticlesFrame from './ArticlesFrame';

const LinuxFaq=()=> {
  return (
    <div>
      <NavBar/>
      <div className="headbanner">
        <h2 className="banner-text-1">Got Linux?  Got stuck?</h2>
        <h3 className="banner-text-2">Start troubleshooting now</h3>
      </div>
      <br/>
      <br/>
      <ArticlesFrame/>
    </div>
  );
}
export default LinuxFaq;
