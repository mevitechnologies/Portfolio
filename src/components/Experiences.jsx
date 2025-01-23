import React from "react";
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

const Experiences = () => {
  return (
    <section id="experience" className="container my-5">
      <h1 className="text-center mb-5" style={{ color: "#2c3e50", fontWeight: "bold" }}>
        Experience & Education
      </h1>

      {/* Education Section */}
      <section id="education" className="mb-5">
        <h2 className="mb-4" style={{ color: "#2980b9", fontWeight: "bold" }}>
          <FaGraduationCap className="mr-2" /> Education
        </h2>
        <div className="education-item mb-4">
          <h4 className="text-primary">Master of Science in Data Science</h4>
          <p><strong>Chandigarh University</strong>, Chandigarh, India</p>
        </div>
        <div className="education-item mb-4">
          <h4 className="text-primary">Bachelor of Engineering in Computer Science & Engineering</h4>
          <p><strong>Sri Krishna Institute of Technology</strong>, Bangalore, India</p>
        </div>
        <div className="education-item mb-4">
          <h4 className="text-primary">Pre-University Education</h4>
          <p><strong>BMS College for Women</strong>, Bangalore, India</p>
        </div>
        <div className="education-item">
          <h4 className="text-primary">Secondary Education (10th)</h4>
          <p><strong>Nehru Memorial School</strong>, Bangalore, India</p>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="professional-experience">
        <h2 className="mb-4" style={{ color: "#2980b9", fontWeight: "bold" }}>
          <FaBriefcase className="mr-2" /> Professional Experience
        </h2>
        <div className="experience-item mb-5">
          <h4 className="text-primary">Software Developer</h4>
          <p><strong>Vritusa Consultancy Services Pvt Ltd</strong>, Bangalore, India</p>
          <ul>
            <li>Worked on building an ecommerce web application using C# .Net MVC.</li>
          </ul>
        </div>
        <div className="experience-item mb-5">
          <h4 className="text-primary"><GiTeacher className="mr-2" /> (Part-Time) Trainer</h4>
          <p><strong>Acranton Technologies</strong>, Bangalore, India</p>
          <ul>
            <li>Trained interns in Python, Machine Learning, Data Analytics, and Data Science.</li>
          </ul>
        </div>
        <div className="experience-item mb-5">
          <h4 className="text-primary"><FaLaptopCode className="mr-2" /> Software Engineer and Trainer</h4>
          <p><strong>Mevi Technologies</strong>, Bangalore, India</p>
          <ul>
            <li>Developed innovative software solutions and provided training on modern technologies.</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Experiences;
