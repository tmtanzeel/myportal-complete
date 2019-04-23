import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './css/CodeBanner.css';

const CodeBanner=()=> {
  return (
    <div>
      <br/>
      <br/>
      <Container className='code-banner'>
        <Row>
          <Col>
            <h3 className="samplecode">
              <span className='if'>if</span>
              <span className="lfor">(lookingFor</span>
              <span className="blue">==</span>
              <span className="word">(installation</span>
              <span className="or"> || </span>
              <span className="word">bugs</span>
              <span className="or"> || </span>
              <span className="word"> troubleshooting </span>
              <span className="or"> || </span>
              <span className="word"> patches</span>
              <span className="or"> || </span>
              <span className="word"> fixes))</span>
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>printf(</span>
              <span className="output">"you are at the right place"</span>
              <span>);</span>
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CodeBanner;
