import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import TutorialCards from './TutorialCards';

class TutorialFrame extends Component {
  constructor() {
    super();
    this.state={
      cards: [
        {name: "Dynamic styling", language: "ReactJS", framelink: "https://www.youtube.com/embed/TyIXoX1GxCs"},
        {name: "Concept of Keys", language: "ReactJS", framelink:"https://www.youtube.com/embed/qhhRuZDuKEM"},
        {name: "map() function", language: "ReactJS", framelink:"https://www.youtube.com/embed/UOToFkB7Xs4"},
        {name: "Changing the state dynamically", language: "ReactJS", framelink:"https://www.youtube.com/embed/AhteAvQk_r0"},
        {name: "Toggle button example", language: "ReactJS", framelink: "https://www.youtube.com/embed/tEMM-HEYTJk"},
        {name: "Auto adjusting image", language: "HTML and CSS", framelink: "https://www.youtube.com/embed/fZhLphY9FmI"},
        {name: "Splash screen app", language: "JavaFX", framelink: "https://www.youtube.com/embed/lrg2eT-gz5E"},
        {name: "Routing", language: "ReactJS - Part I", framelink: "https://www.youtube.com/embed/zicueVUsg0w"},
        {name: "Routing", language: "ReactJS - Part II", framelink: "https://www.youtube.com/embed/zF63RB0JbEY"},
        {name: "Cards example", language: "ReactJS", framelink: "https://www.youtube.com/embed/bu-BCFqp7uo"},
        {name: "Reactstrap", language: "ReactJS", framelink: "https://www.youtube.com/embed/w98Q1JC2DZU"},
        {name: "Listeneing to changes", language: "ReactJS", framelink: "https://www.youtube.com/embed/cq0-dPm-Uk4"},
        {name: "Delete state items dynamically", language: "ReactJS", framelink: "https://www.youtube.com/embed/i80G6dL5LhQ"},
        {name: "Delete state items immutably", language: "ReactJS", framelink: "https://www.youtube.com/embed/O4UW_qgy-Es"},
        {name: "Accessing state items", language: "ReactJS", framelink: "https://www.youtube.com/embed/BD_dzn43Bcc"}
      ]
    }
  }
  render() {
    let carddetails=this.state.cards.map(singlecard=> {
      return (
        <Col xs="4">
          <TutorialCards details={singlecard} />
        </Col>
      )
    });
    return (
      <div>
       <Container fluid>
        <Row>
          {carddetails}
        </Row>
      </Container>
      </div>
    );
  }
}
export default TutorialFrame;
