import React, {Component} from 'react';
import ArticleCards from '../containers/ArticleCards';
import {Col, Container, Row} from 'reactstrap';
import {Button} from 'reactstrap';
import './css/ArticlesFrame.css';

class CardFrame extends Component {
  state={
    people: [
      {name: "Making Tea and Coffe", likes: <Box1/>, image: "atom-text-editor.png"},
      {name: "How to boil suger", likes: <Box2/>, image: "atom-text-editor.png"},
      {name: "American style popcorn", likes: "Pretzels", image: "atom-text-editor.png"},
      {name: "Rebecca", likes: "Pizza", image: "atom-text-editor.png"},
      {name: "Marlin", likes: "Hot dog", image: "atom-text-editor.png"},
      {name: "Jiva", likes: "Burger", image: "atom-text-editor.png"},
      {name: "Andre", likes: "Pasta", image: "atom-text-editor.png"}
    ],
    rendernow: false,
    content: null,
    textOnButton: "Read",
    showComponent: null
  }

  displayOnClick=(person)=>{
    console.log(this.state);
    let likes ;
    this.state.people.filter(function(P){
      return (P === person)?(likes = person.likes ): console.log('Not found')
    })
    this.state.content = likes
    const currentview=this.state.rendernow;
    this.setState({
      rendernow: !currentview
    })
  }



  render() {
    let content=null;
    if(this.state.rendernow) {
      content=<p>{this.state.content }</p>
    }
    let details=this.state.people.map(singlePerson=>{
      return(
        <Col xs="3">
          <ArticleCards details={singlePerson}/>
          <Button onClick={()=> this.displayOnClick(singlePerson) } className="read-button">{singlePerson.name}</Button>
        </Col>
      )
    })

    return(
      <div>
        <Container>
          <Row className="card-rows">
            {details}
          </Row>
        </Container>
        {content}
      </div>
    )
  }
}

export class Box1 extends Component {
  render() {
    return(
      <div>
        <h2>Step 1:</h2>
        <p>Take a pan</p>
        <h2>Step 2:</h2>
        <p>Put some water and bring it to boil</p>
        <h2>Step 3:</h2>
        <p>Add some sugar, tea and boil for next few minutes</p>
      </div>
    )
  }
}

export class Box2 extends Component {
  render() {
    return(
      <div>
        <h2>Step 1:</h2>
        <p>Take a bowl</p>
        <h2>Step 2:</h2>
        <p>Put some water and bring it to boil</p>
        <h2>Step 3:</h2>
        <p>Add some sugar and boil for 5 mins</p>
        <h2>Step 4:</h2>
        <p>Cool down to the room temprature</p>
      </div>
    )
  }
}

export default CardFrame;
