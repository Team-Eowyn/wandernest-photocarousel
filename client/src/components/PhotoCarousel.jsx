import React from 'react';
import ReactDOM from 'react-dom';
import MainDisplay from './MainDisplay.jsx';
import Sidebar from './Sidebar.jsx';
import BottomGallery from './BottomGallery.jsx';
import Modal from './Modal.jsx';
import styled from 'styled-components';


const Container = styled.div`
  display: grid;
  height:454px;
  min-width:570px;
  max-width:837px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1.6fr 0.4fr 1fr 1fr;
  column-gap:2px;
  row-gap:2px;
`


class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Container>
        <MainDisplay />
        <Sidebar />
        <BottomGallery />
        <Modal />
      </Container>
    )
  }
}

export default PhotoCarousel;