import React from 'react';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import careSource from '../assets/images/careSource.png';
import unity from '../assets/images/unity.png';
import megaDesk from '../assets/images/megaDesk.png';
import scripture from '../assets/images/scripture.PNG';
import megaDesk2 from '../assets/images/megadesk2.PNG';
import contoso from '../assets/images/contoso.JPG';
import antTrail from '../assets/images/antTrail.JPG';
import { Container } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'CareSource',
                    subTitle: 'Full-Time Internship',
                    imgSrc: careSource,
                    selected: false,
                    content: "While working at CareSource for the past year and a half, I worked on internal tools and bugfixes for the Enrollment team that handles incoming member records." +
                    "One project I have worked on was the Enrollment Engine Regression Testing Tool. I am the lead contributor for this tool that verifies the Enrollment Engine still works " +
                    "after integrating a change into the Enrollment Engine. This tool saves the Enrollment Team hundreds of hours a month in quality assurance work and has been used as a " +
                    "model for other regression tools in the company. I also created a dynamic mapping table to store component mappings and a configurations management UI to allow for easy " +
                    "creation and modification for Enrollment Team configurations for use of compliance management software."
                },
                {
                    id: 1,
                    title: 'Unity Game Development',
                    subTitle: 'Object-Oriented Programming in C#',
                    imgSrc: unity,
                    link: 'https://github.com/HoltPicklesimer/Unity-Space-Game',
                    selected: false,
                    content: "In my spare time, I enjoy creating games and learning game design in Unity. I often find new techniques to use in my professional work when I research solutions " +
                    "to my games. I created this 3D space shooter in a week during my spare time. I used 3D models from Star Wars, so unfortunately I cannot put all of the project on GitHub; " +
                    "however, the code is posted. In this program, I demonstrate object pooling using a custom object pooling class. Object pooling can help provide easy access to resources " +
                    "when it would otherwise be too costly. Please check out my other projects on GitHub: https://github.com/HoltPicklesimer where you can find the source code to my web " +
                    "applications and a gender classifier developed using the Keras and TensorFlow libraries."
                },
                {
                    id: 2,
                    title: 'MegaDesk Application',
                    subTitle: 'A .NET Framework Desktop Application',
                    imgSrc: megaDesk,
                    link: 'https://github.com/HoltPicklesimer/MegaDesk-Picklesimer',
                    selected: false,
                    content: "This is a windows forms desktop application I created in collaboration with another teammate. The application is used to create and store price quotes for a fictional desk " +
                    "manufacturing company. Desk and quote specs are stored in a local file and can be viewed and filtered by surface material. C# and .NET were used to implement the functionality behind " +
                    "the windows forms."
                },
                {
                    id: 3,
                    title: 'My Scripture Journal Application',
                    subTitle: 'A .NET Core Web Application',
                    imgSrc: scripture,
                    link: 'https://github.com/HoltPicklesimer/MyScriptureJournal',
                    selected: false,
                    content: "This is a web application I created using Razor Web Pages and .NET Core. The application stores a user's scripture journal entries and the user can perform CRUD operations using " +
                    "the different pages. The entries are stored in a local database."
                },
                {
                    id: 4,
                    title: 'Contoso University',
                    subTitle: 'A .NET Core MVC Web Application',
                    imgSrc: contoso,
                    link: 'https://github.com/HoltPicklesimer/ContosoUniversity',
                    selected: false,
                    content: "A web application I created as a learning project by following the Microsoft Contoso University tutorial that uses Entity Framework. Users can enroll students and add courses and departments. A few changes were made to the styling of the pages."
                },
                {
                    id: 5,
                    title: 'Ant Trail',
                    subTitle: 'An ASP.NET Core MVC Bug Tracker',
                    imgSrc: antTrail,
                    link: 'https://github.com/HoltPicklesimer/BugTracker2',
                    selected: false,
                    content: "A web application I created using ASP.NET Core MVC and Entity Framework. Users can register for an account, create projects and bug reports, and invite other users to their projects. Authentication was created using scaffolded Razor web pages."
                },
            ]
        };
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
    
}

export default Carousel;