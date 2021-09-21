import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Footer() {
   return (
      <footer className='mt-5'>
         <Container fluid={true}>
            <Row className='border-top justify-content-between p-3'>
               <Col className='p-0' md={8} sm={12}>
                  Holt Picklesimer -{' '}
                  <a href='https://github.com/HoltPicklesimer' target='_blank'>
                     GitHub
                  </a>{' '}
                  -{' '}
                  <a
                     href='https://www.linkedin.com/in/holt-picklesimer'
                     target='_blank'
                  >
                     LinkedIn
                  </a>
               </Col>
               <Col className='p-0 d-flex justify-content-end' md={4}>
                  Copyright © {new Date().getFullYear()} - Ethan Picklesimer,
                  All Rights Reserved.
               </Col>
            </Row>
         </Container>
      </footer>
   );
}

export default Footer;
