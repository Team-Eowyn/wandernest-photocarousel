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
const SidebarItem = styled.div`
  background-color:gray;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align: center;
  line-height:1.25;

  &:hover {
    filter: brightness(125%);
  }
`

const Pool = styled(SidebarItem)`
  grid-area: 7 / 1 / 10 / 4;

`

const Suite = styled(SidebarItem)`
  grid-area: 4 / 1 / 7 / 4;

`

const Traveler = styled(SidebarItem)`
  grid-area: 1 / 1 / 4 / 4;
`

const InnerSpan = styled.span`
  margin: auto;
  display:block;
  color:white;
  font-size:16px;
  font-family:Arial, sans-serif;
`


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Side>
        <Traveler onClick={this.props.showModal}>
          <InnerSpan>Traveler</InnerSpan>
          <InnerSpan>(587)</InnerSpan>
        </Traveler>
        <Suite onClick={this.props.showModal}>
          <InnerSpan><i class="fa fa-bed"></i></InnerSpan>
          <InnerSpan>Room & Suite</InnerSpan>
          <InnerSpan>(48)</InnerSpan></Suite>
        <Pool onClick={this.props.showModal}>
          <InnerSpan><i className="fa fa-camera"></i></InnerSpan>
          <InnerSpan>Pool & Beach</InnerSpan>
          <InnerSpan>(6)</InnerSpan>
        </Pool>
      </Side>
    )
  }
}

export default Sidebar;



