import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='contact container'>
      <h2 className="text-center">Contact</h2>
      <p className="text-center">Feel free to reach out to me!</p>
      <div className='row'>
        <div className='row justify-content-center card border border-dark'>
          <ul>
            <li><strong>Phone:</strong> +91 8310585607</li>
            <li><strong>City:</strong> Bangalore, India</li>
            <li><strong>Degree:</strong> Masters in Data Science</li>
            <li><strong>Email:</strong> <a href="mailto:meghabasavaraju19@gmail.com">meghabasavaraju19@gmail.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/megha-bs-b16ab2155" target="_blank" rel="noopener noreferrer">megha-bs-b16ab2155</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/meghabasavaraju" target="_blank" rel="noopener noreferrer">meghabasavaraju</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
