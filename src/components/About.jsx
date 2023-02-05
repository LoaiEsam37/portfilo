import React from 'react';
import Online_protection_Monochromatic from '../assets/Online_protection_Monochromatic.png';
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-ex-auto col-lg-5">
            <h1>About</h1>
            <p>
              I have started my career since 2022 when i was 14 years old, I
              wanted to become a <strong>Full stack Developer</strong> based on
              Nodejs, Denojs, Nextjs and Reactjs. I have a big experience in Web
              Pentesting using Python, I have made a Python Scanner fro LFI and
              XSS keep in mind that I made this tool when i was 14 years old,
              you can check my tool from{' '}
              <a href="https://github.com/LoaiEsam37/Lazyxss">here</a>. you can also
              check my Certifications in{' '}
              <a href="https://www.linkedin.com/in/loai-esam-109971215/details/certifications/">
                Linkedin
              </a>{' '}
              when i was 12 years old in{' '}
              <a href="https://www.freecodecamp.org/certification/Loai_Esam/scientific-computing-with-python-v7">
                Python
              </a>
              ,&nbsp;
              <a href="https://www.freecodecamp.org/certification/Loai_Esam/javascript-algorithms-and-data-structures">
                Javascript
              </a>&nbsp;
              and&nbsp;
              <a href='https://www.linkedin.com/in/loai-esam-109971215/details/certifications/'>
                Pre-security
              </a>
              .
            </p>
          </div>
          <div className="col-5 d-none d-lg-block">
            <img src={Online_protection_Monochromatic} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
