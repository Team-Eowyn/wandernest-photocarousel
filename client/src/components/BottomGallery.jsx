import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Bottom = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-area: 7 / 1 / 9 / 10;
  column-gap: 2px;
  row-gap: 2px;
`
const GalleryItem =styled.div`
  background-color: gray;
  grid-area: auto;

  &:hover {
    filter: brightness(125%);
  }
`

const GalleryImage =styled.img`
  height:100%;
  width:100%;
`




class BottomGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }

  componentWillMount(){
    this.setState({
      photos:this.props.photos
    })
  }

  render() {
    console.log(this.state.photos);
    return (
      <Bottom>
        {this.state.photos.map((item, index)=>{
          return <GalleryItem key={index} onClick={(e)=>this.props.setMainPhoto(e)}><GalleryImage src={item.photoPath}></GalleryImage></GalleryItem>
        })}
      </Bottom>
    )
  }
}

export default BottomGallery;