import React from 'react';

const About = () => {
  return (
    <section id='about' className='container mh-100 card'>
      <div className='row p-5'>
        <div className='col-md-4 text-center'>
          <img src="./home-photo.png" alt="" className='about-img' />
        </div>
        <div className='col-md-7'>
          <h2 className='text-center'>About Me</h2>
          <p className="text-justify">
            Hello, I'm Megha BS, an aspiring Data Scientist, Data Analyst, and Python Fullstack Developer with a deep passion for AI, Machine Learning, and Generative AI. Having trained over 20,000 students in Python, ML, data analytics, and Django, I've played a pivotal role in shaping the skills and careers of aspiring professionals.
          </p>
          <p className="text-justify">
            With professional experience at Acranton, Mevi, and Virtusa, I have delivered tailored sessions and workshops, effectively meeting diverse learning needs. My portfolio includes leading SharePoint projects, fostering communication skills, and mentoring thousands of professionals to excel in their fields. I specialize in web applications, ML predictions, and real-world data solutions, making meaningful contributions to the tech ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
