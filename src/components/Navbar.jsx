import React from 'react';
import { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';

const Navbar = () => {
  var [toggle, setToggle] = useState(false);
  useEffect(() => {
    var myCollapse = document.getElementById('navbarSupportedContent');
    var bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#header" title="Full Stack Developer">
          LoaiEsam
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggle(!toggle)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link active" href="#header">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link active" href="#about">
                About
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link active" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link active" href="#skills">
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
