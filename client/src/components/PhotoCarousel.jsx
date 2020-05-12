import React from 'react';
import ReactDOM from 'react-dom';
import MainDisplay from './MainDisplay.jsx';
import Sidebar from './Sidebar.jsx';
import BottomGallery from './BottomGallery.jsx';
import Modal from './Modal.jsx';
import  { withRouter }from "react-router-dom";
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

    this.state = {
      show: false,
      hotel: null,
      photos:null,
      mainPhoto: null,
    };
  }

  componentDidMount(){
    var url = new URL(window.location.href);
    var ID = url.searchParams.get('id');
    fetch(`/api/hotels/${ID}`)
      .then(response => response.json())
      .then(data => {
        let images = [];
          data.photos.forEach(photo=>{
          let img = new Image();
          img.src = photo.photoPath;
          console.log(img);
          images.push(photo);
        });

        this.setState({
          hotel: data,
          photos: images,
          mainPhoto: images[0].photoPath
        });
      });
  }

  setMainPhoto(e){
    this.setState({
      mainPhoto: e.target.src,
    })
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
      if (this.state.hotel !== null){
        return (
        <Container>
          <MainDisplay showModal={this.showModal.bind(this)} background={this.state.mainPhoto}/>
          <Sidebar showModal={this.showModal.bind(this)} setMainPhoto={this.setMainPhoto.bind(this)} photos={this.state.photos}/>
          <BottomGallery photos={this.state.photos} setMainPhoto={this.setMainPhoto.bind(this)}/>
          <Modal show={this.state.show} hideModal={this.hideModal.bind(this)} photos={this.state.photos}/>
        </Container>
        )
      } else{
        return "Loading..."
      }
  }
}

export default PhotoCarousel;