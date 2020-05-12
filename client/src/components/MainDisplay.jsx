import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';



const Display = styled.div`
  background-color: gray;
  grid-area: 1 / 1 / 7 / 10;
  position: relative;

  &:hover{
    filter: brightness(125%);
  }
  background: ${props => `url(${props.background})`};
  background-size: 100% 100%;
`

const ViewAll = styled.span`
  font-size:16px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  color:white;
  position:absolute;
  padding: 16px 16px 8px;
  bottom: 0;
  left: 0;

  &:hover{
    text-decoration: underline;
  }
`



class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Display onClick={this.props.showModal} background={this.props.background}>
        <ViewAll><i className="fa fa-camera"></i>   View all photos (608)</ViewAll>
      </Display>
    )
  }
}

export default MainDisplay;