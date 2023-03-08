import React from 'react'
import styled, { css } from 'styled-components'

function Button({size, color, label, event, children}) {
  return (
    <Buttons size={size} color={color} onClick={event}>{label || children}</Buttons>
  )
}

export default Button



const Buttons = styled.button`
  border-radius: 10px;
  border:none;
  font-size: 30px;

  // Default : small
  width: 100px;
  height: 30px;
  font-size: 15px;
  background-color: ${({color})=> color};
  &:active {
    filter: brightness(0.7);
  } ;

  ${({size}) => 
  size === "huge" && 
  css`
    width: 300px;
    height: 70px;
    font-size: 20px;
    background-color: transparent;
    &:active {
      background-color: rgba(0,0,0,0.3)
     };
    border: 3px solid ${({color})=> color};
  `}

  ${({size}) => 
  size === "large" && 
  css`
    width: 200px;
    height: 50px;
    font-size: 30px;
    background-color : ${({color})=> color};
    &:active {
      filter:brightness(0.7)
    };
  `}

  ${({size}) => 
  size === "medium" && 
  css`
    width: 150px;
    height: 40px;
    font-size: 25px;
    background-color : ${({color})=> color};
  &:active {
    filter:brightness(0.7)
  };
  `}
  
`
