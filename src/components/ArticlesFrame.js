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
      {name: "Installing Atom text editor", demo:["Add repository","Update local package list", "Install Atom editor", "Check your installed version. Done!"],likes: ["~$ sudo add-apt-repository ppa:webupd8team/atom","~$ sudo apt-get update","~$ sudo apt-get install atom", "~$ atom --version"], image: "atom-text-editor.png"},
      {name: "create-react-app", demo:["Make sure npm is installed on your machine. If not then do the following", "Now you can install create-react-app globally using -g parameter", "You can use this command to create react projects"], likes: ["~$ sudo apt-get install npm","~$ sudo npm install -g create-react-app","~$ create-react-app myfirstapp"], image: "react-best.png"},
      {name: "Installing Brasero", demo: ["Update local package list", "Install Brasero", "Launch Brasero", "Remove permanently"], likes: ["~$ sudo apt-get update", "~$ sudo apt-get install brasero", "~$ brasero", "~$ sudo apt-get remove brasero"], image: "trylogo.png"},
      {name: "Left align title bar buttons", demo: ["You can change sequence of buttons by rearranging their occurance in the command"], likes: ["~$ gsettings set org.gnome.desktop.wm.preferences button-layout 'close,maximize,minimize:'"], image: "seattle.png"},
      {name: "Tweak tool", demo: ["Add repository", "The terminal may return 'universe' distribution component is already enabled for all resources. This is absolutely ok", "Launch tweak tool"], likes: ["~$ sudo add-apt-repository universe", "~$ sudo apt-get install gnome-tweak-tool", "~$ gnome-tweaks (OR gnome-tweak-tool)"], image: "trylogo.png"},
      {name: "MySQL commands", demo:["Login as root (or any other user). Password is blank for the root", "See all existing users after logging in as any user", "See all databases under current user", "Create a new database under current user", "Use an existing database", "Create a new user with all rights", "Show current logged in user", "Switch to some other user"], likes: ["~$ sudo mysql -u root -p","mysql> select user from mysql.user;", "mysql> show databases;", "mysql> create database dbname;", "mysql> use database;", "mysql> grant all privileges on *.* to 'newuser'@'localhost' identified by 'password';", "mysql> select current_user();", "mysql> system mysql -u otheruser -p;"], image: "trylogo.png"},
      {name: "Adding reactstrap", likes: "Pasta", image: "trylogo.png"},
      {name: "Show-Hide mounted volumes", demo: [""], likes: "Pizza", image: "seattle.png"},
    ],
    rendernow: false,
    content: null,
  }

  displayOnClick=(person)=>{
    this.state.customState =person
    console.log(this.state);
    let obj ;
    this.state.people.filter(function(P){
      return (P === person)?(obj = {likes:person.likes,demo:person.demo} ): console.log('Not found')
    })
    this.state.content = obj
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
      for(let i = 0; i < this.state.content.likes.length; ++i){
        content.push(
          <pre>
            <div>
              <h2 className="step"> Step {i+1}: </h2>
              <h3 className="step-detail">{this.state.content.demo[i]}</h3>
              <h5 className="command">{this.state.content.likes[i]}</h5>

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
