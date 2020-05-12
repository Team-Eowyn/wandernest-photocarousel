import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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
  width: 100%;
  margin:0;
  margin-bottom: 8px;
  min-width: 120px;
  max-width: 140px;
  height: 92px;
  background: ${props => `url(${props.background})`};
  background-size: 100% 100%;
`

const Gallery =styled.div`
  grid-area: 1 / 3 / 8 / 8;
  height:455px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  padding: 0 24px 14px;
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
const GalleryItem = styled.div`
  background-color: grey;
  height: 206px;
  width: 270px;
  margin-bottom:4px;
  padding: 2px;
  background: ${props => `url(${props.background})`};
  background-size: 100% 100%;
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
  width: 187px;
`

const AllPhotos = styled(Dropdown)`
  width: 108px;
`
const Featured = styled(Dropdown)`
  flex: 1 1 auto;
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

function ModalBody({photos}) {
  return (
    <Container>
      <Albums>
        <AlbumHeader>Albums</AlbumHeader>
        {photos.slice(0,5).map( (photo, index)=>{
        return <AlbumThumb background={photo.photoPath} key={index} />
      })}
      </Albums>
      <Gallery>
        <GalleryHeader>Room & Suite</GalleryHeader>
        <FilterBy>Filter By</FilterBy>
        <SortBy>Sort By</SortBy>
        <Dropdown> Photos from Everyone
          <DropContent>Photos from Travelers</DropContent>
          <DropContent>Photos from Management</DropContent>
        </Dropdown>
        <Dropdown> All Photos
        </Dropdown>
        <Dropdown> Featured
        </Dropdown>
          <GalleryContainer>
            {photos.map( (photo, index)=>{
              return <GalleryItem background={photo.photoPath} key={index} />
            })}
          </GalleryContainer>
      </Gallery>
    </Container>
  )
}

export default ModalBody;