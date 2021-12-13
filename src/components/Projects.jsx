import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  return (
    <div className="Projects">
      <div className="all-projects">
        <Link to='/projects/school-projects'>
          <div className="project-theme">
            <h2>School Projects</h2>
          </div>
        </Link>
        <Link to='/projects/customer-projects'>
          <div className="project-theme">
            <h2>Customer Projects</h2>
          </div>
        </Link>
        <Link to='/projects/personal-projects'>
          <div className="project-theme">
            <h2>Personal Projects</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
