import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalHeader from './ModalHeader.jsx';
import ModalBody from './ModalBody.jsx';

const ModalDisplay = styled.div`
  position: absolute;
  top: 10px;
  bottom: 0px;
  left: 48px;
  right: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  box-shadow: 2px 2px 9px rgba(0,0,0,.5);
  transition: opacity .4s ease-in-out;
  z-index: 10;
  border-radius: 2px;
  height: 504px;
  width:1200px;
  background-color: white;
  display: ${props => props.show ? "block" : "none"}
`
class Modal extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <ModalDisplay show={this.props.show}>
        <ModalHeader hotel={this.props.hotel} hideModal={this.props.hideModal}></ModalHeader>
        <ModalBody photos={this.props.photos}></ModalBody>
      </ModalDisplay>
    )
  }
}

export default Modal;