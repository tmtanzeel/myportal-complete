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
        {name: "Toggle button example", language: "ReactJS", framelink: "https://www.youtube.com/embed/4lANAs0lvYU"},
        {name: "Auto adjusting image", language: "HTML and CSS", framelink: "https://www.youtube.com/embed/fZhLphY9FmI"}
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
