import Project from './Project';
import webLinkIcon from '../assets/webLinkIcon.jpg';
import './CustomerProjects.css';

const CustomerProjects = () => {
  return (
    <div className="CustomerProjects">
      <h2>Customer Projects</h2>
      <div className="all-customer-projects">
        <Project 
          projetImg={''}
          projetLink={webLinkIcon}
          projetTitle={'The Good Loop'}
          projetDescription={'App being created.'}
          projetLanguages={'Language used : React, CSS, JS, NodeJS, MySQL.'}
        />
      </div>
    </div>
  );
}

export default CustomerProjects;