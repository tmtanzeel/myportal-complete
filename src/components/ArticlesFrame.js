import React, {Component} from 'react';
import ArticleCards from '../containers/ArticleCards';
import {Col, Container, Row} from 'reactstrap';
import {Button} from 'reactstrap';
import Footer from './Footer';
import './css/ArticlesFrame.css';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class CardFrame extends Component {
  state={
    people: [
    {name: "Installing Atom text editor", likes: ["~$ sudo add-apr-repository ppa:webupd8team/atom","~$ sudo apt-get update","~$ sudo apt-get install atom", "~$ atom --version"], image: "atom-text-editor.png"},
      {name: "create-react-app", likes: ["~$ sudo apt-get install npm","~$ sudo npm install -g create-react-app","~$ create-react-app myfirstapp"], image: "atom-text-editor.png"},
      {name: "American style popcorn", likes: "Pretzels", image: "atom-text-editor.png"},
      {name: "Rebecca", likes: "Pizza", image: "atom-text-editor.png"},
      {name: "Marlin", likes: "Hot dog", image: "atom-text-editor.png"},
      {name: "Jiva", likes: "Burger", image: "atom-text-editor.png"},
      {name: "Andre", likes: "Pasta", image: "atom-text-editor.png"}
    ],
    rendernow: false,
    content: null,
  }

  displayOnClick=(person)=>{
    this.state.customState =person
    console.log(this.state);
    let likes ;
    this.state.people.filter(function(P){
      return (P === person)?(likes = person.likes ): console.log('Not found')
    })
    this.state.content = likes
    const currentview=this.state.rendernow;
    this.setState({
      rendernow: true
    })
  }

  closeContent = ()=>{
    this.setState({
      rendernow: false
    })
  }

  render() {
    let content=[];
    if(this.state.rendernow) {
      let str;
      for(let i = 0; i < this.state.content.length; ++i){
        content.push(
          <pre>
            <div>
              <h2 className="step"> Step {i+1}: </h2>
              <h5 className="command">{this.state.content[i]}</h5>
            </div>
          </pre>
        );
      }
      content.push(<Button onClick = {()=> this.closeContent()}>Close</Button>);
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
        <br/><br/><br/>
        <hr/>
        {content}
        <br/><br/>
        <Footer/>
      </div>
    )
  }
}
export default CardFrame;
