import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalDisplay = styled.div`
  bacgrkound-color: yellow;
  display:none;
`


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <ModalDisplay>
        <h1>Modal</h1>
      </ModalDisplay>
    )
  }
}

export default Modal;