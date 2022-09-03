import React, {useState} from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Result=() =>{
    return(
        <p><br />Your message has been sent. Thank you!</p>
    )
}

function Contact() {

  const [result, showResult] = useState(false)

  const sendEmail = (e) => {
    //const form = useRef();
    e.preventDefault();

    emailjs.sendForm('service_zez6468', 'template_sd6up36', e.target, '9THNFbfru8nqk8iho')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };


  return (
    <div>
    <section id="contact" class="contact">
     <div class="section-counter paralax-mf bg-image cover-image white-title" >
        <div class="overlay-mf-c"></div>
        <br />
        <br />
        <div class="container position-relative">
      <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a ">
                <br />
                Contact
              </h3>
              <p class="subtitle-a ">
               Drop me a message or call if you have any interesting idea to work on!!
              </p>
              <div class="line-mf"></div>
            </div>
        </div>

        <div class="col-md-12">
                <div class="info-box mt-4">

                  <a href="https://www.linkedin.com/in/karthik-krishnan-o-75846920b/" role="button" rel="noreferrer" target="_blank"><i class="bi bi-linkedin"></i></a>
                  <a href="https://github.com/Karthik-Krishnano" role="button" rel="noreferrer" target="_blank"><i class="bi bi-github"></i></a>
                  <a href="https://www.instagram.com/_karthik_krishnan_2/" role="button" rel="noreferrer" target="_blank"><i class="bi bi-instagram"></i></a>
                </div>
                
          </div>

        
        <div class="row" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-6">

            <div class="row">
             
              <div class="col-md-12">
                <div class="info-box mt-4">
                <a href="mailto:ndmmech@gmail.com">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Me</h3>
                  <p>ndmmech@gmail.com</p></a>
                  <a href="mailto:nadheemnassar.matara2020@vitstudent.ac.in">
                  <p>nadheemnassar.matara2020@vitstudent.ac.in</p></a>
                </div>
              </div>
              <div class="col-md-12">
                <div class="info-box mt-4">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Me</h3>
                  <a href="tel:9061912359"><p>+91 9061912359</p></a>
                </div>
              </div>
            </div>

          </div>

          

          <div class="col-lg-6">
            <br />
            <form class="php-email-form" onSubmit={sendEmail}>
              <div class="row">
                <div class="col form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div class=" col form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
                </div>

              <div class="row">
              <div class="col form-group">
                <input type="text" class="form-control" name="phone" id="phone" placeholder="Phone" required />
              </div>
              <div class="col form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            
            <div class="row text-center">
                
                {result ? <Result/>: null}
            </div>
            </form>
          </div>

          

        </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Contact
