import emailjs from 'emailjs-com';
import './Form.css';

const Form = () => {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const isEmail = () => {
  //   let mail = document.getElementById('not-mail');
  //   let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //   if (email.match(regex)) {
  //     mail.style.display = 'none';
  //     return true;
  //   } else {
  //     mail.style.display = 'block';
  //     mail.style.animation = 'dongle 1s';
  //     setTimeout(() => {
  //       mail.style.animation = 'none';
  //     }, 1000);
  //     return false;
  //   }
  // };

  // const failMessage = () => {
  //   let formMess = document.querySelector('.form-message');

  //   formMess.innerHTML = 'Please fill in the required fields correctly*';
  //   formMess.style.opacity = '1';
  //   formMess.style.background = 'rgb(255,0,0)';

  //   document.getElementById('name').classList.add('error');
  //   document.getElementById('email').classList.add('error');
  //   document.getElementById('message').classList.add('error');
  // };

  // const successMessage = () => {
  //   let formMess = document.querySelector('.form-message');
  //   formMess.innerHTML = "Message sent!";
  //   formMess.style.background = '#00FA71';
  //   formMess.style.opacity = '1';

  //   document.getElementById('name').classList.remove('error');
  //   document.getElementById('email').classList.remove('error');
  //   document.getElementById('message').classList.remove('error');

  //   setTimeout(() => {
  //     formMess.style.opacity = '0';
  //   }, 5000);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (name && isEmail() && message) {
  //     sendFeedback('template_brho77n', {
  //       name,
  //       phone,
  //       email,
  //       message,
  //     });
  //   } else {
  //     failMessage();
  //   }
  // };

  // const sendFeedback = (templateId, variables) => {
  //   window.emailjs
  //     .send('service_f9c7onx', templateId, variables)
  //     .then((res) => {
  //       successMessage();
  //       setName('');
  //       setPhone('');
  //       setEmail('');
  //       setMessage('');
  //     })
  //     .catch(
  //       (err) =>
  //         (document.querySelector('.form-message').innerHTML =
  //           "An error has occurred. Please try again.")
  //     );
  // };

  const formSend = (message) => {
    alert(message);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_209wzbv',
        e.target,
        'user_C5yaKoafAWtmBjxtvO0um'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="Form">
      <form action="" onSubmit={sendEmail}>
        <div className="form-box">
          <div className="row50">
            <div className="input-box">
              <label>First name</label> 
              <input
                type="text"
                required="required"
                placeholder="John*"
                name="first-name"
              />
            </div>
            <div className="input-box">
              <label>Last name</label> 
              <input
                type="text"
                required="required"
                placeholder="Doe*"
                name="last-name"
              />
            </div>
          </div>

          <div className="row50">
            <div className="input-box">
              <label>Email</label>
              <input
                type="email"
                required="required"
                placeholder="johndoe@email.com*"
                name="email"
              />
            </div>
            <div className="input-box">
              <label>Mobile</label>
              <input
                type="text"
                placeholder="+33 6 01 23 45 67"
                name="mobile"
              />
            </div>
          </div>

          <div className="row100">
            <div className="input-box">
              <label>Message</label>
              <textarea
                type="text"
                required="required"
                rows="8"
                placeholder="Write your message here...*"
                name="message"
              />
            </div>
          <div/>

          <div className="row100">
            <div className="input-box"></div>
              <input
                type="submit"
                id="submitBtn"
                onClick={() => formSend(`Thanks for your message! Have a good day!`)}
                value="Send"
              >
              </input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
