import { GoMail } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Form from './Form';
import Rocket from './Rocket';
import profile from '../assets/profile.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div className="moon">
      <div className="Contact">
        <div className="contact-title">
          <h2>Get in Touch</h2>
        </div>
        <div className="contact-container">
          <div className="contact form"><Form /></div>
          <div className="contact info">
            <div className="info-content">
              <div className="img-profile">
                <img src={profile} alt="selfie" />
              </div>
            <div className="info-box">
            <div>
                <p>Kévin BRUNO</p>
              </div>
              <div>
                <span><GoMail/></span>
                <a href='mailto:kevinbruno90@gmail.com' rel="noreferrer" target="_blank">kevinbruno90@gmail.com</a>
              </div>
              <div>
                <span><BsTelephone/></span>
                <a href='te:+33675682062' rel="noreferrer" target="_blank">+33 6 75 68 20 62</a>
              </div>
            </div>
            </div>
            <ul className="social-medial">
              <li><a href="https://www.linkedin.com/in/kevin-bruno-983a6417b/" rel="noreferrer" target="_blank"><AiFillLinkedin/></a></li>
              <li><a href="https://github.com/KvnBrn" rel="noreferrer" target="_blank"><AiFillGithub/></a></li>
            </ul>
          </div>
          <div className="contact launch"><Rocket/></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
