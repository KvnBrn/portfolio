import Project from './Project';
import projet1 from '../assets/projet1.png';
import projet2 from '../assets/projet2.png';
import hackathon1 from '../assets/hackathon1.png';
import checkpoint2 from '../assets/checkpoint2.png';
import webLinkIcon from '../assets/webLinkIcon.jpg';
import './SchoolProjects.css';

const SchoolProjects = () => {
  return (
    <div className="SchoolProjects">
      <h2>School Projects</h2>
      <div className="all-school-projects">
        <Project 
          projetImg={projet1}
          projetLink={webLinkIcon}
          projetUrl={'https://romantic-heisenberg-0da09c.netlify.app/'}
          projetTitle={'Wilder Remote Life'}
          projetDescription={'First project of the training which lasted less than a week. There were 4 of us to create a responsive application to be able to properly prepare future wilders for the remote web development training of the WildCodeSchool.'}
          projetLanguages={'Languages used: HTML, CSS, JS.'}
        />
        <Project 
          projetImg={projet2}
          projetLink={webLinkIcon}
          projetUrl={''}
          projetTitle={'Watch It All'}
          projetDescription={'With another group of 3 people, we had to create an app in 21 days. We had to use React and we chose an API that displays movies and series. Our app is totaly responsive!'}
          projetLanguages={'Languages used: React, CSS, JS.'}
        />
        <Project 
          projetImg={checkpoint2}
          projetLink={webLinkIcon}
          projetUrl={''}
          projetTitle={'Wild Plop Games'}
          projetDescription={'This was my 2nd checkpoint. I had 4 hours to create a web-app & achieved several missions like: display the full list of games, add a filter, display detailed information about the current game & remove a game from the list by using an API.'}
          projetLanguages={'Languages used: React, CSS, JS.'}
        />
        <Project 
          projetImg={hackathon1}
          projetLink={webLinkIcon}
          projetUrl={''}
          projetTitle={'Hackathon 1'}
          projetDescription={'It was my first Hackathon: 28 hours to create an app of our choice with the theme of music. This time there were 5 of us to take up the challenge. We overcame the difficulties and our app (responsive of course) was ready on time.'}
          projetLanguages={'Languages used: React, CSS, JS.'}
        />
        <Project 
          projetImg={'https://lh3.googleusercontent.com/proxy/LQnTT30yFkeRgmkdyMA1TO8GoTDQz6N1X9vSVVqyPBKBBtR5z8ZF6TKxTX1Zb2FVAEMrkwnyK5roE_ozBHOYCxcUwKXEijUrpgPgbvDe-QCrDU0b2SNZo8lVhQ2zD8lNDR-bOCH4arF6U7I'}
          projetLink={webLinkIcon}
          projetUrl={''}
          projetTitle={'The Good Loop'}
          projetDescription={'App being created.'}
          projetLanguages={'Languages used: React, CSS, JS, NodeJS, MySQL.'}
        />
      </div>
    </div>
  );
}

export default SchoolProjects;