import React from 'react';

const Services = () => {
  return (
    <section id="service">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000b76"
          fill-opacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,197.3C672,192,768,224,864,240C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container" id="services">
        <div className="row align-items-center justify-content-center">
          <h1 className="col-auto">Services</h1>
        </div>
        <div className="row align-items-center justify-content-between mt-5">
          <div className="col-lg-3 col-md-12 col-xs-12 card text-center mb-5">
            <div class="card-body">
              <h5 class="card-title">Client Development</h5>
              <div className="card-text">Build your Custom Website</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-xs-12 card text-center mb-5">
            <div class="card-body">
              <h5 class="card-title">Full Stack Development</h5>
              <div className="card-text">
                Build your Custom Website with maintaining the mechanisms that
                process data and perform actions on websites
              </div>
            </div>
            <div className="card-footer">Recommended</div>
          </div>
          <div className="col-lg-3 col-md-12 col-xs-12 card text-center mb-5">
            <div class="card-body">
              <h5 class="card-title">Server Development</h5>
              <div className="card-text">
                build and maintain the mechanisms that process data and perform
                actions on websites
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000b76"
          fill-opacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,149.3C672,160,768,224,864,224C960,224,1056,160,1152,112C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Services;
