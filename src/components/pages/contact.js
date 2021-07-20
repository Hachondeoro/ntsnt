import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from '@reach/router';
import Footer from '../components/footer';


export default function() {

  function sendEmail(e) {

    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
      .then((result) => {
          console.log(result.text);
          success.classList.add('show');
          button.classList.add('show');
          failed.classList.remove('show');
      }, (error) => {
          console.log(error.text);
          failed.classList.add('show');
      });
  }

  return (
    <div>
    <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/contact.jpg'})`}}>
        <div className='mainbreadcumb'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-6'>
                <h1>Contact</h1>
              </div>
              <div className='col-md-6'>
                <div className='list'>
                  <Link className='link' to="/home">Home</Link>
                  <span className='dash'>/</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
           <div className="text-side">
             <h2>Get in Touch</h2>
              <p>Vestibulum volutpat, lacus a ultrices sagittis, 
              mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. 
              Phasellus pede arcu, dapibus eu, fermentum et, 
              dapibus sed, urna.</p>

              <div className='address'>
                <div className='heading'>Our Office</div>
                <div className='list'>
                  <i className="fa fa-map-marker"></i>
                  70 Washington Square South New York, NY 10012, United States
                </div>
                <div className='list'>
                  <i className="fa fa-envelope-o"></i>
                  <a href='mailto:contact_info@artha.com' target='_blank' rel='noopener noreferrer'>
                    contact_info@artha.com
                  </a>
                </div>
                <div className='list'>
                  <i className="fa fa-phone"></i>
                  +92 423 567 7
                </div>
              </div>
           </div>
          </div>
          <div className='col-md-6'>
            <div className="form-side">
              <form className="formcontact" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" required />
                <div id='success' className='hide'>Your message has been sent...</div>
                <div id='failed' className='hide'>Message failed...</div>
                <button type="submit" id='buttonsent'>
                  <span className="shine"></span>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
