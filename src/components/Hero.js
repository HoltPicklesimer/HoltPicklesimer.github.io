import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Hero(props) {
   return (
      <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
         <Container fluid={true}>
            <Row className='justify-content-center py-5'>
               <Col md={1.5} sm={1.5}>
                  {props.img && (
                     <Image
                        src={props.img}
                        fluid={true}
                        roundedCircle={true}
                        width={150}
                        height={150}
                        style={{ padding: '10px' }}
                     />
                  )}
               </Col>
               <Col md={10.5} sm={10.5}>
                  {props.title && (
                     <h1 className='display-2 font-weight-bolder'>
                        {props.title}
                     </h1>
                  )}
                  {props.subTitle && (
                     <h3 className='display-4 font-weight-light'>
                        {props.subTitle}
                     </h3>
                  )}
                  {props.text && (
                     <h3 className='lead font-weight-light'>{props.text}</h3>
                  )}
               </Col>
            </Row>
         </Container>
      </Jumbotron>
   );
}

export default Hero;
