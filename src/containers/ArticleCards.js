import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './css/ArticleCards.css';

const ArticleCards=(props)=> {
  return (
    <div>
      <br/>
      <br/>
      <Card>
        <div className='image-container'>
          <img className='article-image' src={require('./usable/'+props.details.image)} alt={props.details.image}/>
        </div>
      </Card>
    </div>
  );
};

export default ArticleCards;
