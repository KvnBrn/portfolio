import './Project.css';

const Project = ( {projetImg, projetTitle, projetDescription, projetLanguages, projetLink, projetUrl} ) => {
  return (
    <div className="Project">
      <div className="box">
        <div className="icon">
          <img src={projetImg} alt="screen of the main page" />
        </div>
        <div className="content">
          <a href={projetUrl} rel="noreferrer" target='_blank'>
            <img src={projetLink} alt="Web link icon" />
          </a>
          <h3>{projetTitle}</h3>
          <p>{projetDescription}</p>
          <p>{projetLanguages}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;