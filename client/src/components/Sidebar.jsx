import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Side = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-area: 1 / 10 / 9 / 13;
  row-gap: 2px;
`

const Pool =styled.div`
  grid-area: 7 / 1 / 10 / 4;
  background-color:gray;
  `

const Suite = styled.div`
  grid-area: 4 / 1 / 7 / 4;
  background-color:gray;
`

const Traveler = styled.div`
  grid-area: 1 / 1 / 4 / 4;
  background-color:gray;
`


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Side>
        <Pool />
        <Suite />
        <Traveler />
      </Side>
    )
  }
}

export default Sidebar;



