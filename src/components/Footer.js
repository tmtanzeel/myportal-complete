import React from 'react';
import './css/Footer.css';

const Footer=()=> {
  return(
    <div className="footer-area">
    <footer>
      <div>
        <p>Made with <i className='fa fa-heart fa-1x'></i> from the scratch by Tanzeel</p>
        <p>Call now +91 8979539377</p>
        <p><i className='fa fa-file fa-1x'></i>&nbsp;<a href='../downloadables/tanzeel_resume.pdf' download='tanzeel_resume.pdf'>Download Resume</a></p>
        <i className="fa fa-dribbble fa-2x"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-facebook fa-2x"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-twitter fa-2x"></i>&nbsp;&nbsp;&nbsp;
        <i className="fa fa-google-plus fa-2x"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-linkedin fa-2x"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-instagram fa-2x"></i>&nbsp;&nbsp;&nbsp;
      </div>
    </footer>
    </div>
  );
}
export default Footer;
