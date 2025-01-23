import React from 'react';
import 'boxicons';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='row p-5'>
          <div className='col-xl-8 col-lg-8'>
            <div className='textblock'>
              <h3>Hello, It's Me</h3>
              <h1>Megha BS</h1>
              <h3>And I'm an <span>Aspiring Data Scientist</span></h3>
              <p>Let's connect on social media!</p>
              <div className="social-media">
                <a href="https://www.linkedin.com/in/megha-bs-b16ab2155/" target="_blank" rel="noreferrer"><box-icon type='logo' name='linkedin-square'></box-icon></a>
                <a href="https://github.com/meghabasavaraju19" target="_blank" rel="noreferrer"><box-icon name='github' type='logo'></box-icon></a>
              </div>
              <a href="./Megha_BS_CV.pdf" download className="btn mt-2">Download CV</a>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4'>
            <img src="./bannar.png" alt="" className='home-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
