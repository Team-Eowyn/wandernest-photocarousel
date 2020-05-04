import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

const Albums = styled.div`
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
  background-color: grey;
  width: 100%;
  margin:0;
  margin-bottom: 8px;
  min-width: 120px;
  max-width: 140px;
  height: 92px;
`

const Gallery =styled.div`
  grid-area: 1 / 3 / 8 / 8;
  height:455px;
`
const GalleryHeader = styled.div`
  flex: 0 0 90%;
  padding:16px 24px;
  color: #000a12;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`

function ModalBody() {
  return (
    <Container>
      <Albums>
        <AlbumHeader>Albums</AlbumHeader>
        <AlbumThumb></AlbumThumb>
        <AlbumThumb></AlbumThumb>
        <AlbumThumb></AlbumThumb>
        <AlbumThumb></AlbumThumb>
        <AlbumThumb></AlbumThumb>
        <AlbumThumb></AlbumThumb>
      </Albums>
      <Gallery>
        <GalleryHeader>Room & Suite</GalleryHeader>
      </Gallery>
    </Container>
  )
}

export default ModalBody;