import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FocusContainer = styled.div`
  position: absolute;
  top:48px;
  left:343px;
  height: 456px;
  width:856px;
  z-index: 10;
  background-color: black;
  background: ${props => `url(${props.background})`};
  background-size: 100% 100%;
  display: ${props => props.set ? "block" : "none"}
`
const GalleryButton = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  line-height: 20px;
  background-color: #fff;
  color: #000a12;
  border: 1px solid #000a12;
  border-radius: 2px;
  padding: 8px 16px;
  cursor: pointer;
`
const Overlay = styled.span `
  background-image: linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.53) 10%,rgba(0,0,0,.8));
  border-radius: 0 0 2px 2px;
  position: absolute;
  color: #fff;
  bottom: 0;
  transition: opacity 333ms linear;
  width: calc(100% - 16px);
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 0;
`
const AvatarImage = styled.img`
  display: inline;
  border: 2px solid #fff;
  border-radius: 42px;
  width: 42px;
  margin-left:10px;
`
const Creator = styled.div`
  display: inline;
  vertical-align: middle;
  margin-left: 10px;
  margin-right:auto;
`
const Seperator = styled.div`
  border-bottom: 1px solid #fff;
  margin-right: 32px;
  margin-bottom: 20px;
`
const Review = styled.p`
  padding: 0 10px;
`
class GalleryFocus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log(this.props.photo);
      let background = this.props.photo ? this.props.photo.photoPath : '';
      let avatar = this.props.photo ? this.props.photo.creatorAvatar : '';
      let creator = this.props.photo ? this.props.photo.creator : '';
      let review = this.props.photo ? this.props.photo.Review : '';
      let upload = this.props.photo ? this.props.photo.uploadDate.split(',')[0] : '';
    return (
      <FocusContainer set={this.props.set} background={background} >
        <Overlay>
          <AvatarImage src={avatar}></AvatarImage><Creator>{creator} • {upload} </Creator>
          <Review>{review}</Review>
          <Seperator />
        </Overlay>
        <GalleryButton onClick={this.props.hide}>Gallery</GalleryButton>
      </FocusContainer>
    )
  }
}

export default GalleryFocus;