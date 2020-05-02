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
`




class BottomGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Bottom>
        {[...Array(20)].map((x, i) =>
          <GalleryItem key={i} />
        )}
      </Bottom>
    )
  }
}

export default BottomGallery;