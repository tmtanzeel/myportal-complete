import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './css/ArticleCards.css';

const ArticleCards=(props)=> {
  return (
    <div>
      <br/>
      <br/>
      <Card>
        <img src={require('./usable/'+props.details.image)} alt={props.details.image}/>
        
      </Card>
    </div>
  );
};

export default ArticleCards;
