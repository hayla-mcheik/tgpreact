import React from 'react';
import waitForIt from '../../src/assets/Waitforitnew.gif'

const Preloader = () => {
  return (
    <div class="center">
  {/* <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div> */}

  <img src={waitForIt} alt="" />
    </div>
  );
};

export default Preloader;