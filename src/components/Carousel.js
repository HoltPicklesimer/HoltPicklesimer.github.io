import React from 'react';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import careSource from '../assets/images/careSource.png';
import unity from '../assets/images/unity.png';
import megaDesk from '../assets/images/megaDesk.png';
import scripture from '../assets/images/scripture.PNG';
import contoso from '../assets/images/contoso.JPG';
import antTrail from '../assets/images/antTrail.JPG';
import producktivo from '../assets/images/producktivo.png';
import walmart from '../assets/images/walmart.jpg';
import { Container } from 'react-bootstrap';

class Carousel extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [
            {
               id: 0,
               title: 'Walmart Global Tech',
               subTitle: 'Software Engineer II',
               imgSrc: walmart,
               selected: false,
               content:
                  'I am currently a software developer for Walmart Global Tech since July 2021. I am part of the COSTL (Checkout Streamlined) team and ' +
                  'build features for a new POS (Point of Sale) system to replace legacy checkout systems that associates use in-store. I led the ' +
                  'eWIC (Woman, Infants, Children) frontend and framework payment implementation for the COSTL system to allow associates to select ' +
                  "eWIC as another payment option via card or handkey. I am a POS expert and POC for COSTL's payment flows and cart implementation. " +
                  'I regularly use React, Redux, TypeScript/JavaScript, and Java to develop new features and fix issues for the COSTL Framework team, ' +
                  'but was previously on the frontend team to develop the next-gen desktop application. I am determined to improve processes and ' +
                  'innovate to find the best solution. I enjoy mentoring and learning from colleagues so everyone can grow to a greater potential.',
            },
            {
               id: 1,
               title: 'ProDucktivo',
               subTitle: 'Gamify Tasks!',
               imgSrc: producktivo,
               selected: false,
               link: 'https://github.com/HoltPicklesimer/ProDucktivo',
               link2: 'https://play.google.com/store/apps/details?id=com.pickleco.producktivo&hl=en_US&gl=US',
               content:
                  'ProDucktivo is a mobile android app I developed for my senior project using React Native, Expo CLI, and Firebase. Producktivo is a productivity app that ' +
                  'gamifies tasks to give users more motivation to work on said tasks. Producktivo tracks task status, due dates, and when tasks are completed and started. ' +
                  'Users can sign up for an account using their email and a password and all of their information and tasks are stored in a Firebase database. Users can view ' +
                  'their tasks coming up within a month on the main task page, where they can also create new tasks, start and complete tasks, view individual task details, and ' +
                  'delete tasks. Users can filter their tasks on the task page by tasks they still need to do, tasks not started, tasks started, tasks completed, or all tasks. ' +
                  'When creating or editing a task, users can set the task difficulty to easy, medium, or hard, which determines the amount of points the user earns after completing ' +
                  'the task. As users earn points for completing tasks, they grow in level, which can be viewed on their stats page. Users can view the total amount of time it ' +
                  'takes to complete tasks and the average amount of time it takes for them to complete a single task on the stats page as well. From the settings page, users can ' +
                  'reset their email and password or logout of the app. It is downloadable on the Google Play Store',
            },
            {
               id: 2,
               title: 'CareSource',
               subTitle: 'Full-Time Internship',
               imgSrc: careSource,
               selected: false,
               content:
                  'While interning with CareSource while finishing my degree, I worked on internal tools and bugfixes for the Enrollment team that handles incoming member records. ' +
                  'One project I have worked on was the Enrollment Engine Regression Testing Tool. I was the lead contributor for this tool that verifies the Enrollment Engine still works ' +
                  'after integrating a change into the Enrollment Engine. This tool saves the Enrollment Team hundreds of hours a month in quality assurance work and has been used as a ' +
                  'model for other regression tools in the company. I also created a dynamic mapping table to store component mappings and a configurations management UI to allow for easy ' +
                  'creation and modification for Enrollment Team configurations for use of compliance management software.',
            },
            {
               id: 3,
               title: 'Ant Trail',
               subTitle: 'An ASP.NET Core MVC Bug Tracker',
               imgSrc: antTrail,
               link: 'https://github.com/HoltPicklesimer/BugTracker2',
               selected: false,
               content:
                  'A web application I created using ASP.NET Core MVC and Entity Framework. Users can register for an account, create projects and bug reports, and invite other users to their projects. Authentication was created using scaffolded Razor web pages. Unfortunately, this app is no longer available to view in browser as I was using a student subscription to an Azure database and my funds have been used up.',
            },
            {
               id: 4,
               title: 'Unity Game Development',
               subTitle: 'Object-Oriented Programming in C#',
               imgSrc: unity,
               link: 'https://github.com/HoltPicklesimer/Unity-Space-Game',
               selected: false,
               content:
                  'In my spare time, I enjoy creating games and learning game design in Unity. I often find new techniques to use in my professional work when I research solutions ' +
                  'to my games. I created this 3D space shooter in a week during my spare time. I used 3D models from Star Wars, so unfortunately I cannot put all of the project on GitHub; ' +
                  'however, the code is posted. In this program, I demonstrate object pooling using a custom object pooling class. Object pooling can help provide easy access to resources ' +
                  'when it would otherwise be too costly. Please check out my other projects on GitHub: https://github.com/HoltPicklesimer where you can find the source code to my web ' +
                  'applications and a gender classifier developed using the Keras and TensorFlow libraries.',
            },
            {
               id: 5,
               title: 'MegaDesk Application',
               subTitle: 'A .NET Framework Desktop Application',
               imgSrc: megaDesk,
               link: 'https://github.com/HoltPicklesimer/MegaDesk-Picklesimer',
               selected: false,
               content:
                  'This is a windows forms desktop application I created in collaboration with another teammate. The application is used to create and store price quotes for a fictional desk ' +
                  'manufacturing company. Desk and quote specs are stored in a local file and can be viewed and filtered by surface material. C# and .NET were used to implement the functionality behind ' +
                  'the windows forms.',
            },
            {
               id: 6,
               title: 'My Scripture Journal Application',
               subTitle: 'A .NET Core Web Application',
               imgSrc: scripture,
               link: 'https://github.com/HoltPicklesimer/MyScriptureJournal',
               selected: false,
               content:
                  "This is a web application I created using Razor Web Pages and .NET Core. The application stores a user's scripture journal entries and the user can perform CRUD operations using " +
                  'the different pages. The entries are stored in a local database.',
            },
            {
               id: 7,
               title: 'Contoso University',
               subTitle: 'A .NET Core MVC Web Application',
               imgSrc: contoso,
               link: 'https://github.com/HoltPicklesimer/ContosoUniversity',
               selected: false,
               content:
                  'A web application I created as a learning project by following the Microsoft Contoso University tutorial that uses Entity Framework. Users can enroll students and add courses and departments. A few changes were made to the styling of the pages.',
            },
         ],
      };
   }

   handleCardClick = (id, card) => {
      let items = [...this.state.items];

      items[id].selected = items[id].selected ? false : true;

      items.forEach((item) => {
         if (item.id !== id) {
            item.selected = false;
         }
      });

      this.setState({
         items,
      });
   };

   makeItems = (items) => {
      return items.map((item) => {
         return (
            <Card
               item={item}
               click={(e) => this.handleCardClick(item.id, e)}
               key={item.id}
            />
         );
      });
   };

   render() {
      return (
         <Container fluid={true}>
            <Row className='justify-content-around'>
               {this.makeItems(this.state.items)}
            </Row>
         </Container>
      );
   }
}

export default Carousel;
