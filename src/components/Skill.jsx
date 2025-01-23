import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillSections = [
    {
      title: 'Languages',
      className: 'languages-section',
      skills: [
        { name: 'Python', level: '100%', icon: 'devicon-python-plain colored' },
        { name: 'C#', level: '85%', icon: 'devicon-csharp-plain colored' },
        { name: 'R', level: '80%', icon: 'devicon-r-plain colored' },
        { name: 'JavaScript', level: '75%', icon: 'devicon-javascript-plain colored' },
      ],
    },
    {
      title: 'Styling & Markup',
      className: 'styling-section',
      skills: [
        { name: 'HTML', level: '100%', icon: 'devicon-html5-plain colored' },
        { name: 'CSS', level: '90%', icon: 'devicon-css3-plain colored' },
      ],
    },
    {
      title: 'Databases',
      className: 'databases-section',
      skills: [
        { name: 'MongoDB', level: '100%', icon: 'devicon-mongodb-plain colored' },
        { name: 'MySQL', level: '80%', icon: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', level: '90%', icon: 'devicon-postgresql-plain colored' },
      ],
    },
    {
      title: 'Cloud Platforms & Deployment',
      className: 'cloud-section',
      skills: [
        { name: 'AWS', level: '80%', icon: 'devicon-amazonwebservices-original colored' },
        { name: 'Azure', level: '80%', icon: 'devicon-azure-plain colored' },
        { name: 'Vercel', level: '85%', icon: 'fas fa-cloud' },
        { name: 'Railway', level: '85%', icon: 'fas fa-train' },
      ],
    },
    {
      title: 'Frameworks',
      className: 'frameworks-section',
      skills: [
        { name: 'React.js', level: '85%', icon: 'devicon-react-original colored' },
        { name: 'Django', level: '85%', icon: 'devicon-django-plain' },
      ],
    },
    {
      title: 'Skill Sets',
      className: 'ai-section',
      skills: [
        { name: 'Django Fullstack', level: '85%', icon: 'devicon-django-plain' },

        { name: 'Machine Learning', level: '95%', icon: 'fas fa-robot' },
        { name: 'Deep Learning', level: '95%', icon: 'fas fa-brain' },
        { name: 'AI', level: '90%', icon: 'fas fa-cogs' },
        { name: 'Generative AI', level: '90%', icon: 'fas fa-network-wired' },
        { name: 'Image Processing', level: '90%', icon: 'fas fa-image' },
      ],
    },
    {
      title: 'Analytics & Visualization',
      className: 'analytics-section',
      skills: [
        { name: 'Data Visualization', level: '100%', icon: 'fas fa-chart-bar' },
        { name: 'Data Analytics', level: '100%', icon: 'fas fa-database' },
        { name: 'Power BI', level: '85%', icon: 'fas fa-chart-pie' },
      ],
    },
    {
      title: 'Libraries & Tools',
      className: 'libraries-section',
      skills: [
        { name: 'Pandas', level: '100%', icon: 'devicon-python-plain colored' },
        { name: 'NumPy', level: '100%', icon: 'devicon-python-plain colored' },
        { name: 'Matplotlib', level: '100%', icon: 'devicon-python-plain colored' },
        { name: 'Scikit Learn', level: '100%', icon: 'devicon-python-plain colored' },
        { name: 'TensorFlow', level: '100%', icon: 'devicon-tensorflow-original colored' },
        { name: 'Keras', level: '100%', icon: 'devicon-python-plain colored' },
        { name: 'Plotly', level: '100%', icon: 'fas fa-chart-line' },
        { name: 'Seaborn', level: '100%', icon: 'fas fa-wave-square' },
        { name: 'Hugging Face Transformers', level: '100%', icon: 'fas fa-brain' },
        { name: 'Git', level: '90%', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', level: '90%', icon: 'devicon-github-original' },
      ],
    },
  ];

  return (
    <section id="skills" className="container my-5">
      <h2 className="text-center mb-4">My Skills</h2>
      {skillSections.map((section, index) => (
        <div key={index} className={`mb-5 ${section.className}`}>
          <h3 className="text-center mb-3">{section.title}</h3>
          <div className="row">
            {section.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="col-md-3 col-sm-6 text-center mb-4 skill-card"
              >
                <i className={`${skill.icon} skill-icon`}></i>
                <h5 className="mt-2">{skill.name}</h5>
                <p className="text-muted">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
