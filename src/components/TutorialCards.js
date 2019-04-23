import React, {Component} from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import './css/TutorialCards.css';

class TutorialCards extends Component {
  render() {
    return (
      <div className="card-stack">
        <br/>
        <br/>
        <Card>
          <iframe  src={this.props.details.framelink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
          <CardBody>
            <CardTitle className="info">{this.props.details.name} in {this.props.details.language}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default TutorialCards;
