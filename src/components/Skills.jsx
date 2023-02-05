import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const css = 24;
  const bootstrap = 76;
  const react = 43;
  const deno = 54;
  const node = 50;
  const express = 79;

  return (
    <section id="skills">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <h1 className="col-auto">Skills</h1>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-7">
            <div class="progressBar mt-3">
              <h2>CSS</h2>
              <ProgressBar now={css} variant="danger" animated />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-7">
            <div class="progressBar mt-3">
              <h2>Bootstrap</h2>
              <ProgressBar now={bootstrap} variant="danger" animated />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-7">
            <div class="progressBar mt-3">
              <h2>React.js</h2>
              <ProgressBar now={react} variant="danger" animated />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-7">
            <div class="progressBar mt-3">
              <h2>Deno.js</h2>
              <ProgressBar now={deno} variant="danger" animated />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-7">
            <div class="progressBar mt-3">
              <h2>Express.js</h2>
              <ProgressBar now={express} variant="danger" animated />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-7">
            <div class="progressBar mt-3">
              <h2>Node.js</h2>
              <ProgressBar now={node} variant="danger" animated />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
