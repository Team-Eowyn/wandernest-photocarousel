import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';



const Display = styled.div`
  background-color: gray;
  grid-area: 1 / 1 / 7 / 10;
`


class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Display>
        <h1>Main Display</h1>
      </Display>
    )
  }
}

export default MainDisplay;