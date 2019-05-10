import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import './css/PageModal.css';

class PageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Bakers's note</ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col xs="3" sm="3">
                  <img src={require('./usable/chef.png')}/>
                </Col>
                <Col xs="9" sm="9">
                  <span className="modal-text">
                    This website is handmade with 100% pure ReactJS and the best quality of ES6 ingredients.
                    <br/>
                    <img src={require('./usable/veg.png')}/>&nbsp;Contains reactstrap v4
                  </span>
                  <br/>
                  <span className="modal-text">
                    Tastes best with Mozilla Firefox!
                  </span>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Ok, Great!</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default PageModal;
