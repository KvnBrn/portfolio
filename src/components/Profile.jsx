import { useState } from 'react/cjs/react.development';
import responsive from '../assets/responsive.png';
import './Profile.css';

const Profile = () => {
  const [progressHtml, setProgressHtml] = useState(false);
  const [progressCss, setProgressCss] = useState(false);
  const [progressResp, setProgressResp] = useState(false);
  const [progressJs, setProgressJs] = useState(false);
  const [progressReact, setProgressReact] = useState(false);
  const [progressNode, setProgressNode] = useState(false);
  const [progressSql, setProgressSql] = useState(false);
  const [progressGit, setProgressGit] = useState(false);
  const handleClickHtml = () => {
    setProgressHtml(!progressHtml)
  };
  const handleClickCss = () => {
    setProgressCss(!progressCss)
  };
  const handleClickResp = () => {
    setProgressResp(!progressResp)
  };
  const handleClickJs = () => {
    setProgressJs(!progressJs)
  };
  const handleClickReact = () => {
    setProgressReact(!progressReact)
  };
  const handleClickNode = () => {
    setProgressNode(!progressNode)
  };
  const handleClickSql = () => {
    setProgressSql(!progressSql)
  };
  const handleClickGit = () => {
    setProgressGit(!progressGit)
  };
  return (
    <div className="sun">
      <div className="asteroids">
        <div className="shape"></div>
        <div className="Profile">
          <div className='profile-main-title'>
            <div className="profile-title">
              <h1>Me, Myself and I...</h1>
            </div>
          </div>
          <div className="profile-left-container">
            <div className="profile-description">
              <div className="profile-title">
                <h2>About me</h2>
              </div>
              <p>After a Personal Banking and Insurance license, I worked for more than 7 years in various bank branches in the Haut-de-France region.<br/>
              I chose, after several months of introspection, to take a new turn in my professional career.</p>
              <p>September 2021, I started my new challenge by starting a 100% remote Web and Mobile Web Developer training.<br/>
              So here I am with the Wild Code School to carry out my professional retraining.</p>
              <p><span>Currently looking for an internship</span> starting on February 14, 2022. <br/>
              You can find my links and a form in the contact heading if my profile interested you!</p>
            </div>
          </div>
          <div className="profile-right-container">
            <div className="profile-title">
              <h2>Skills</h2>
            </div>
            <div className='skills'>
              <div onClick={handleClickHtml} className="skill-card">
                <h3>HTML</h3>
                <div className={progressHtml ? "no-content" : "content"}>
                  <img className='skill-logo' src="https://www.blog-nouvelles-technologies.fr/wp-content/uploads/2016/04/html5-logo-1-512x500.png" alt="HTML logo" />
                </div>
                <div className={progressHtml ? "content" : "no-content"}>
                  <div class="progress-circle over50 p95">
                    <span>95%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={handleClickCss} className="skill-card">
                <h3>CSS</h3>
                <div className={progressCss ? "no-content" : "content"}>
                  <img className='skill-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png" alt="CSS logo" />
                </div>
                <div className={progressCss ? "content" : "no-content"}>
                  <div class="progress-circle over50 p85">
                    <span>85%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={handleClickResp} className="skill-card">
                <h3>Resp. Design</h3>
                <div className={progressResp ? "no-content" : "content"}>
                  <img className='skill-logo-bis' src={responsive} alt="Responsive design example" />
                </div>
                <div className={progressResp ? "content" : "no-content"}>
                  <div class="progress-circle over50 p90">
                    <span>90%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={handleClickJs} className="skill-card">
                <h3>Javascript</h3>
                <div className={progressJs ? "no-content" : "content"}>
                  <img className='skill-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="Javascript logo" />
                </div>
                <div className={progressJs ? "content" : "no-content"}>
                  <div class="progress-circle over50 p55">
                    <span>55%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={handleClickReact} className="skill-card">
                <h3>React</h3>
                <div className={progressReact ? "no-content" : "content"}>
                  <img className='skill-logo-bis' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/langfr-220px-React-icon.svg.png" alt="React logo" />
                </div>
                <div className={progressReact ? "content" : "no-content"}>
                  <div class="progress-circle over50 p68">
                    <span>68%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={handleClickNode} className="skill-card">
                <h3>NodeJS</h3>
                <div className={progressNode ? "no-content" : "content"}>
                  <img className='skill-logo-bis' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/langfr-220px-Node.js_logo.svg.png" alt="NodeJS logo" />
                </div>
                <div className={progressNode ? "content" : "no-content"}>
                  <div class="progress-circle p45">
                    <span>45%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={handleClickSql} className="skill-card">
                <h3>MySQL</h3>
                <div className={progressSql ? "no-content" : "content"}>
                  <img className='skill-logo-bis' src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/langfr-220px-MySQL.svg.png" alt="MySQL logo" />
                </div>
                <div className={progressSql ? "content" : "no-content"}>
                  <div class="progress-circle over50 p77">
                    <span>77%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={handleClickGit} className="skill-card">
                <h3>Git</h3>
                <div className={progressGit ? "no-content" : "content"}>
                  <img className='skill-logo-bis' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/langfr-220px-Git-logo.svg.png" alt="Git logo" />
                </div>
                <div className={progressGit ? "content" : "no-content"}>
                  <div class="progress-circle over50 p89">
                    <span>89%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
