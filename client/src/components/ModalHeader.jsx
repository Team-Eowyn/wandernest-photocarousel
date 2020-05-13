import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Header = styled.div`
  grid-area: 1 / 1 / 2 / 8;
  display:flex;
  top:0;
  left:0;
  right:0;
  height:48px;
  align-items:center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5
`

const CloseButton = styled.button`
  border: none;
  display: inline-block;
  padding: 8px 16px;
  font-size: 24px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap
  position: absolute;
  right: 5px;
  top: 0;
  border-left: 1px solid #e5e5e5;
`

const Title = styled.span`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #000a12;
    margin-left: 24px;
    flex: 1 1 auto;
`
const Hotel = styled.div`
  font-size:12px;
  padding:0 8px;
`

const Price = styled.div`
  font-size:16px;
  padding:0 8px;
`

const DealButton = styled.button`
  flex: 0 0 auto;
  background-color: #f2b203;
  border-color: #f2b203;
  border-radius: 12px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 16px;
  margin-right:10px;
`

function ModalHeader({hideModal, hotel}) {
  return (
    <Header>
      <Title>Photos of {hotel.hotelName} Hotel</Title>
      <Hotel>TripAdvisor</Hotel>
      <Price>$349</Price>
      <DealButton>View Deal</DealButton>
      <CloseButton onClick={hideModal}>X</CloseButton>
    </Header>
  )
}

export default ModalHeader;