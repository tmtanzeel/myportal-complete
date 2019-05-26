import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import TutorialCards from './TutorialCards';
import TextBox from './TextBox';

function searchingFor(term) {
  return function(x) {
    return x.language.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class TutorialFrame extends Component {
  constructor(props) {
    super(props);
    this.state={
      cards: [
        {name: "Dynamic CSS styling", language: "ReactJS", framelink: "https://www.youtube.com/embed/4nBq7q2trEM"},
        {name: "Concept of Keys", language: "ReactJS", framelink:"https://www.youtube.com/embed/47jOoUTvdJo"},
        {name: "Simple toggle button", language: "ReactJS", framelink:"https://www.youtube.com/embed/RRk2CcQsnj4"},
        {name: "Reactstrap toggle button", language: "ReactJS", framelink: "https://www.youtube.com/embed/tEMM-HEYTJk"},
        {name: "Auto adjusting image", language: "HTML and CSS", framelink: "https://www.youtube.com/embed/Mwj98l1bkPE"},
        {name: "Splash screen app", language: "JavaFX", framelink: "https://www.youtube.com/embed/lrg2eT-gz5E"},
        {name: "Routing", language: "ReactJS - Part I", framelink: "https://www.youtube.com/embed/zicueVUsg0w"},
        {name: "Routing", language: "ReactJS - Part II", framelink: "https://www.youtube.com/embed/zF63RB0JbEY"},
        {name: "Cards example", language: "ReactJS", framelink: "https://www.youtube.com/embed/bu-BCFqp7uo"},
        {name: "Reactstrap", language: "ReactJS", framelink: "https://www.youtube.com/embed/w98Q1JC2DZU"},
        {name: "Listeneing to changes", language: "ReactJS", framelink: "https://www.youtube.com/embed/cq0-dPm-Uk4"},
        {name: "Delete state items dynamically", language: "ReactJS", framelink: "https://www.youtube.com/embed/i80G6dL5LhQ"},
        {name: "Delete state items immutably", language: "ReactJS", framelink: "https://www.youtube.com/embed/O4UW_qgy-Es"},
        {name: "Accessing state items", language: "ReactJS", framelink: "https://www.youtube.com/embed/BD_dzn43Bcc"}
      ],
      term: ''
    }
    this.searchHandler=this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({term: event.target.value})
  }

  render() {
    const {term,cards}=this.state;
    let carddetails=cards.filter(searchingFor(term)).map(singlecard=> {
      return (
        <Col xs="4">
          <TutorialCards details={singlecard} />
        </Col>
      )
    });
    return (
      <div>
       <Container fluid>
        <br/>
        <br/>
        <TextBox change={this.searchHandler} value={term}/>
        <Row>
          {carddetails}
        </Row>
      </Container>
      </div>
    );
  }
}
export default TutorialFrame;
