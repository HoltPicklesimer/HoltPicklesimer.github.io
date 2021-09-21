import React from 'react';
import emailjs from 'emailjs-com';
import Recaptcha from 'react-recaptcha-that-works';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';

class ContactPage extends React.Component {
   constructor(props) {
      super(props);

      // Different binding method, both are valid
      this.checkVerified = this.checkVerified.bind(this);
      this.verifyCallback = this.verifyCallback.bind(this);
      this.expireCallback = this.expireCallback.bind(this);

      this.state = {
         from_name: '',
         from_email: '',
         message: '',
         disabled: false,
         emailSent: null,
         isVerified: false,
      };
   }

   handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
         [name]: value,
      });
   };

   handleSubmit = (event) => {
      this.setState({
         disabled: true,
      });

      emailjs
         .sendForm(
            'gmail',
            'portfolio',
            event.target,
            'user_qKi3RpI6gqF7Y7UDjciy6'
         )
         .then(
            (res) => {
               if (res) {
                  this.setState({
                     disabled: true,
                     emailSent: true,
                  });
               } else {
                  this.setState({
                     disabled: true,
                     emailSent: false,
                  });
               }
            },
            (err) => {
               console.log(err);

               this.setState({
                  disabled: true,
                  emailSent: false,
               });
            }
         );
   };

   expireCallback() {
      alert('Captcha verification expired. Please re-verify.');
   }

   checkVerified(event) {
      event.preventDefault();

      if (this.state.isVerified) {
         this.handleSubmit(event);
      } else {
         alert('Please verify the recaptcha before submitting.');
      }
   }

   verifyCallback(response) {
      if (response) {
         this.setState({ isVerified: true });
      }
   }

   render() {
      return (
         <div>
            <Hero title={this.props.title} />

            <Content>
               <Form onSubmit={this.checkVerified}>
                  <Form.Group>
                     <Form.Label htmlFor='full-name'>Full Name</Form.Label>
                     <Form.Control
                        id='full-name'
                        name='from_name'
                        type='text'
                        value={this.state.from_name}
                        onChange={this.handleChange}
                     />
                  </Form.Group>

                  <Form.Group>
                     <Form.Label htmlFor='email'>Email</Form.Label>
                     <Form.Control
                        id='email'
                        name='from_email'
                        type='email'
                        value={this.state.from_email}
                        onChange={this.handleChange}
                     />
                  </Form.Group>

                  <Form.Group>
                     <Form.Label htmlFor='message'>Message</Form.Label>
                     <Form.Control
                        id='message'
                        name='message'
                        as='textarea'
                        rows='3'
                        value={this.state.message}
                        onChange={this.handleChange}
                     />
                  </Form.Group>

                  <Recaptcha
                     className='recaptcha'
                     siteKey='6LcvCdMZAAAAADt8iHKTJY-0ikSHIKrtC-UbyKbj'
                     onVerify={this.verifyCallback}
                     onExpire={this.expireCallback}
                  />
                  <br />

                  <Button
                     className='d-inline-block'
                     variant='primary'
                     type='submit'
                     disabled={this.state.disabled}
                  >
                     Send
                  </Button>

                  {this.state.emailSent === true && (
                     <p className='d-inline success-msg'>Email Sent</p>
                  )}
                  {this.state.emailSent === false && (
                     <p className='d-inline err-msg'>Email Not Sent</p>
                  )}
               </Form>
            </Content>
         </div>
      );
   }
}

export default ContactPage;
