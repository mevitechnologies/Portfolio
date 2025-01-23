import React, { useEffect, useState } from 'react';
import { FaLaptopCode, FaBrain, FaCogs, FaChartLine } from 'react-icons/fa';  // Importing icons from react-icons

const Projects = () => {
  const [projects, setProjects] = useState({
    professional: [],
    hobby: []
  });

  const fetchProjects = async () => {
    const url = 'https://admin.codewithharsh.ca/api/projects';
    const response = await fetch(url);
    const data = await response.json();
    
    // Separate professional and hobby projects based on project type or a specific condition
    const professionalProjects = data.filter(item => item.type === 'Professional');
    const hobbyProjects = data.filter(item => item.type === 'Hobby');

    setProjects({
      professional: professionalProjects,
      hobby: hobbyProjects
    });

    console.log('Professional Projects:', professionalProjects);
    console.log('Hobby Projects:', hobbyProjects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects container">
      <h2 className="text-center my-4 display-4">My Exciting Projects</h2>

      {/* Professional Projects Section */}
      <div id="professional-projects">
        <h3 className="text-center text-uppercase my-4 font-weight-bold">Professional Projects</h3>
        <div className="row">
          {/* Mevi Technologies Projects */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg border border-dark">
              <div className="card-body text-center">
                <h5 className="card-title text-primary font-weight-bold">LMS for Mevi Technologies</h5>
                <p className="card-text text-muted"><em>Fullstack Development, AWS</em></p>
                <p className="card-text">
                  Worked on building and deploying the Learning Management System (LMS) for Mevi Technologies. 
                  Deployed the system on AWS and ensured its scalability and performance.
                </p>
                <div className="icon-container mb-3">
                  <FaLaptopCode className="project-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg border border-dark">
              <div className="card-body text-center">
                <h5 className="card-title text-primary font-weight-bold">Company Management System</h5>
                <p className="card-text text-muted"><em>Team Project, Mevi Technologies</em></p>
                <p className="card-text">
                  Worked with a team to develop a company management system at Mevi Technologies, focusing on streamlining internal processes.
                </p>
                <div className="icon-container mb-3">
                  <FaLaptopCode className="project-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Virtusa Projects */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg border border-dark">
              <div className="card-body text-center">
                <h5 className="card-title text-primary font-weight-bold">SharePoint Sites Development</h5>
                <p className="card-text text-muted"><em>SharePoint, C# MVC</em></p>
                <p className="card-text">
                  Developed and maintained SharePoint sites for Virtusa, contributing to enhancing collaboration and document management.
                </p>
                <div className="icon-container mb-3">
                  <FaCogs className="project-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg border border-dark">
              <div className="card-body text-center">
                <h5 className="card-title text-primary font-weight-bold">Quotation Software Development</h5>
                <p className="card-text text-muted"><em>C# MVC, Software Development</em></p>
                <p className="card-text">
                  Worked on the development of a quotation software at Virtusa, using C# MVC to streamline and automate the process.
                </p>
                <div className="icon-container mb-3">
                  <FaCogs className="project-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* You can add more professional projects here if necessary */}
        </div>
      </div>

      {/* Hobby Projects Section */}
      <div id="hobby-projects">
        <h3 className="text-center text-uppercase my-4 font-weight-bold">Hobby Projects</h3>
        <div className="row">
          {/* Fancy Hobby Projects Names */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg border border-dark">
              <div className="card-body text-center">
                <h5 className="card-title text-success font-weight-bold">StockSensei: AI-Driven Stock Price Predictor</h5>
                <p className="card-text text-muted"><em>AI/ML, Deep Learning</em></p>
                <p className="card-text">A hybrid deep learning model to predict stock prices with high accuracy.</p>
                <div className="icon-container mb-3">
                  <FaBrain className="project-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg border border-dark">
              <div className="card-body text-center">
                <h5 className="card-title text-danger font-weight-bold">DeepLung: Lung Cancer Deepfake Classifier</h5>
                <p className="card-text text-muted"><em>AI/ML, Image Processing</em></p>
                <p className="card-text">Leveraging deep learning to classify lung cancer images effectively.</p>
                <div className="icon-container mb-3">
                  <FaBrain className="project-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* 10 AI/ML Projects */}
          {["NeuralNetStockPro: Advanced Stock Predictor", 
            "ImageRecon: AI for Real-Time Image Recognition", 
            "VoiceMaster: Speech-to-Text with NLP", 
            "DeepFakesUnveiled: Detecting Deepfake Videos", 
            "CancerAI: Predicting Cancer Risks with ML", 
            "BrainWaveAI: AI for Cognitive Analysis", 
            "AIChatbotX: Conversational AI for E-Commerce", 
            "SmartFitAI: AI-Powered Fitness Recommendations", 
            "DeepSense: Sensory Data Classification using Deep Learning", 
            "AutoAI: Automated Machine Learning for Data Prediction"].map((projectName, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-lg border border-dark">
                <div className="card-body text-center">
                  <h5 className="card-title text-info font-weight-bold">{projectName}</h5>
                  <p className="card-text text-muted"><em>AI/ML</em></p>
                  <p className="card-text">Description of the AI/ML project goes here.</p>
                  <div className="icon-container mb-3">
                    <FaBrain className="project-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 10 Fullstack Projects */}
          {["ShopEase: Fullstack E-Commerce Platform", 
            "QuickBytes: Fast Food Ordering System", 
            "EduTrack: Online Learning Management System", 
            "HealthTrack: Health Management System", 
            "TaskMaster: Project Management Dashboard", 
            "FitTrack: Personal Fitness Tracker", 
            "NewsHub: Real-Time News Aggregator", 
            "MediCare: Hospital Management System", 
            "InstaStore: Social Media E-Commerce Site", 
            "TravelX: Travel Booking & Itinerary System"].map((projectName, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-lg border border-dark">
                <div className="card-body text-center">
                  <h5 className="card-title text-warning font-weight-bold">{projectName}</h5>
                  <p className="card-text text-muted"><em>Fullstack Development</em></p>
                  <p className="card-text">A fullstack web application built with modern technologies.</p>
                  <div className="icon-container mb-3">
                    <FaCogs className="project-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
