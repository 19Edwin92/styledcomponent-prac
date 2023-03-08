import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  /* inline-flex : display: inline-block;과 같다. 가로로 배치된다. 그러나 이는 반응형 웹사이트를 만들때 잘 쓰이지 않는 스타일 옵션이다.   */
  outline: none;
  border: none;
  border-radius: 4px;
  color: ${props=> props.color.font};
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  border: 3px solid ${props => props.color.border};
  &:hover {
    border: 3px solid ${props=> props.color.hover};
  }
  &:active {
    border: 3px solid ${props=> props.color.active};
  }
  
  /* 크기 */
  width: ${props => props.size.width};
  height: ${props => props.size.height};
  line-height: ${props => props.size.height};
  font-size: ${props => props.size.fontSize};;
  

  /* 색상 */
  background: ${props=> props.color.current};
  &:hover {
    background: ${props=> props.color.hover};
  }
  &:active {
    background: ${props=> props.color.active};
  }
`


function Button({color, size, onClick}) {
  return (
    <>
    <StyledButton color={color} size={size} onClick={onClick}/>    
    </>
  )
}

export default Button