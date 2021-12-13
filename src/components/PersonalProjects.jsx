import Project from './Project';
import webLinkIcon from '../assets/webLinkIcon.jpg';
import portfolio from '../assets/portfolio.png';
import './PersonalProjects.css';

const PersonalProjects = () => {
  return (
    <div className="PersonalProjects">
      <h2>Personal Projects</h2>
      <div className="all-personal-projects">
        <Project 
            projetImg={portfolio}
            projetLink={webLinkIcon}
            projetUrl={'https://pensive-dijkstra-4911a7.netlify.app'}
            projetTitle={'Portfolio'}
            projetDescription={'Of course !'}
            projetLanguages={'Languages used: React, CSS, JS.'}
          />
      </div>
    </div>
  );
}

export default PersonalProjects;