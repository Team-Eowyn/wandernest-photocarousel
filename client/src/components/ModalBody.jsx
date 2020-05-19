import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GalleryFocus from './GalleryFocus.jsx';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

const Albums = styled.div`
  background-color:#f2f2f2;
  height:455px;
  grid-area: 1 / 1 / 8 / 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
`
const AlbumHeader = styled.div`
  flex: 0 0 90%;
  padding:16px 24px;
  color: #000a12;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`

const AlbumThumb = styled.div`
  position:relative;
  width: 100%;
  margin:0;
  margin-bottom: 8px;
  min-width: 120px;
  max-width: 140px;
  height: 92px;
  filter: brightness(80%);
  background: ${props => `url(${props.background})`};
  background-size: 100% 100%;
`
const AlbumThumbText = styled.span`
  font-size:12px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  color:white;
  position:absolute;
  bottom: 0;
  left: 0;
  padding:10px;

  &:hover{
    text-decoration: underline;
  }
`
const Gallery =styled.div`
  grid-area: 1 / 3 / 8 / 8;
  height:455px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  padding: 0 24px 14px;
  display: ${props => props.displayGallery ? "flex" : "none"}
`
const GalleryHeader = styled.div`
  flex:0 0 100%;
  padding:16px 24px;
  color: #000a12;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`
const GalleryContainer = styled.div`
  display: flex;
  top: 160px;
  position:absolute;
  left:338px;
  right:0;
  bottom:0;
  overflow-y: scroll;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`

const GalleryItemOverlay = styled.span`
  z-index: 11;
  display:flex;
  justify-content: space-around;
  align-items: flex-end;
  width:100%;
  bottom: 0;
  left: 0;
  position: absolute;
  padding-bottom:10px;
  color: white;
  background: linear-gradient(0deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.05) 50%);
  opacity: 0;
  transition: opacity .5s;
`

const AvatarImage = styled.img`
  border: 2px solid #fff;
  border-radius: 42px;
  width: 42px;
  margin-left:10px;
`

const CreatorName = styled.p`
  margin-left: 10px;
  margin-right:auto;
`

const GalleryItem = styled.div`
  position:relative;
  background-color: grey;
  height: 206px;
  width: 268px;
  margin-bottom:4px;
  margin-left: 5px;
  padding: 2px;
  background: ${props => `url(${props.background})`};
  background-size: 100% 100%;

  &:hover ${GalleryItemOverlay}{
    opacity: 1;
  }
`

const DropContent = styled.span`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  &:hover {
    background-color: #f1f1f1
  }
`

const Dropdown = styled.div`
  border: 1px solid black;
  display: block;
  color: #000a12;
  background-color: #f2f2f2;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  padding: 8px 12px;
  height: 16px;

  &:active ${DropContent} {
    display: block;
  }
`
const PhotosFrom = styled(Dropdown)`
  margin-right:auto;
  width: 187px;
`

const AllPhotos = styled(Dropdown)`
  margin-left:10px;
  margin-right:auto;
  width: 108px;
`
const Featured = styled(Dropdown)`
  margin-left:auto;
  width: 200px;
`



const FilterBy = styled.div`
flex: 0 0 80%;
font-size: 12px;
color: #4a4a4a;
line-height: 16px;
`
const SortBy = styled.div`
flex: 0 0 20%;
font-size: 12px;
color: #4a4a4a;
line-height: 16px;
`

class ModalBody extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      focus: false,
      displayGallery:true,
      focusItem: null
    }
  }

  componentWillReceiveProps(){
    if(this.props.show === false){
      this.hideFocus();
    }
  }
  setFocus = (photo) => {
    this.setState({
      focus: true,
      displayGallery:false,
      focusItem: photo
     });

  };

  hideFocus = () => {
    this.setState({
      focus: false,
      displayGallery:true
    });
  };

  render(){
  return (
    <Container>
      <Albums>
        <AlbumHeader>Albums</AlbumHeader>
        {this.props.photos.slice(0,5).map( (photo, index)=>{
        return <AlbumThumb background={photo.photoPath} key={index}>
                <AlbumThumbText>All Photos ({this.props.photos.length})</AlbumThumbText>
        </AlbumThumb>
      })}
      </Albums>
      <GalleryFocus set={this.state.focus} photo={this.state.focusItem} hide={this.hideFocus.bind(this)}></GalleryFocus>
      <Gallery displayGallery={this.state.displayGallery}>
        <GalleryHeader>Room & Suite</GalleryHeader>
        <FilterBy>Filter By</FilterBy>
        <SortBy>Sort By</SortBy>
        <PhotosFrom> Photos from Everyone
        </PhotosFrom>
        <AllPhotos> All Photos
        </AllPhotos>
        <Featured> Featured
        </Featured>
          <GalleryContainer>
            {this.props.photos.map( (photo, index)=>{
              return <GalleryItem background={photo.photoPath} key={index} onClick={() => this.setFocus(photo)}>
                <GalleryItemOverlay><AvatarImage src={photo.creatorAvatar}/><CreatorName>{photo.creator}</CreatorName></GalleryItemOverlay>
              </GalleryItem>
            })}
          </GalleryContainer>
      </Gallery>
    </Container>
  )
  }
}

export default ModalBody;