import React from 'react';
import Web_Developer_Monochromatic from '../assets/Web_Developer_Monochromatic.png';
const Header = () => {
  return (
    <header className="page-header gradient" id="header">
      <div className="container">
        <div className="row justify-content-md-center align-items-center">
          <div className="col-auto mt-5 mb-5">
            <h1>Full Stack Developer</h1>
            <p>build and maintain both the server-side and client-side</p>
            <a id='read' href="#about" type="button" class="btn btn-info btn-lg d-none d-lg-block">
              Read More
            </a>
          </div>
          <div className="col-md-5 d-none d-lg-block">
            <img src={Web_Developer_Monochromatic} />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,256L48,213.3C96,171,192,85,288,58.7C384,32,480,64,576,101.3C672,139,768,181,864,170.7C960,160,1056,96,1152,85.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>    
    </header>
  );
};

export default Header;
