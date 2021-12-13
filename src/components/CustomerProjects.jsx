import Project from './Project';
import webLinkIcon from '../assets/webLinkIcon.jpg';
import './CustomerProjects.css';

const CustomerProjects = () => {
  return (
    <div className="CustomerProjects">
      <h2>Customer Projects</h2>
      <div className="all-customer-projects">
        <Project 
          projetImg={'https://lh3.googleusercontent.com/proxy/LQnTT30yFkeRgmkdyMA1TO8GoTDQz6N1X9vSVVqyPBKBBtR5z8ZF6TKxTX1Zb2FVAEMrkwnyK5roE_ozBHOYCxcUwKXEijUrpgPgbvDe-QCrDU0b2SNZo8lVhQ2zD8lNDR-bOCH4arF6U7I'}
          projetLink={webLinkIcon}
          projetUrl={''}
          projetTitle={'The Good Loop'}
          projetDescription={'App being created.'}
          projetLanguages={'Language used : React, CSS, JS, NodeJS, MySQL.'}
        />
      </div>
    </div>
  );
}

export default CustomerProjects;