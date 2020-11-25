import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import profile from './assets/images/profile.jpg';

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      title: 'Holt Picklesimer',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Holt Picklesimer',
        subTitle: 'Software Engineering BS',
        text: 'Checkout my projects below.',
      },
      about: {
        title: 'About Me',
        subTitle: 'Software Engineering BS',
        text: 'Checkout my projects below.',
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Holt Picklesimer</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/portfolio">Home</Link>
                <Link className="nav-link" to="/About">About</Link>
                <Link className="nav-link" to="/Contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/portfolio" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} img={profile} />} />
          <Route path="/About" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
          <Route path="/Contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />
          <Footer></Footer>

        </Container>
      </Router>
    );
  }
}

export default App;
