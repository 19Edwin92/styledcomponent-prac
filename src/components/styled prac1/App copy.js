import React from 'react'
import styled from 'styled-components'
import { MdArrowForwardIos } from 'react-icons/md';


function App() {
  return (
    <Layout>
    <h1>Button</h1>
    <StyledDiv>
      <StyledButton
          bordercolor="#45CD9E" 
          width="200px" heigh="50px" 
          onClick={()=>alert("버튼을 만들어보세요")}
          >Large Primary Button <MdArrowForwardIos/></StyledButton>
      <StyledButton 
          bordercolor="#45CD9E" 
          color="#45CD9E" 
          width="130px" 
          heigh="45px" 
          active="#1D5743"
          >Medium</StyledButton>
      <StyledButton 
          bordercolor="#45CD9E" 
          color="#45CD9E"
          width="100px" 
          heigh="40px" 
          active="#1D5743"
          >Small</StyledButton>
    </StyledDiv>
    </Layout>
  )
}

export default App;

const Layout = styled.div`
  width: 85%;
  margin: 0 auto;
`

const StyledButton = styled.button`
  width:  ${props => props.width};
  height:  ${props => props.heigh};
  border : 5px solid ${props => props.bordercolor};
  &:active {
    border : 5px solid ${props => props.active || props.bordercolor};
  }
  border-radius: 10px;
  background-color: ${props => props.color || 'white'};
  &:active {
    background-color: ${props => props.active || 'white'};
  }
  
`

const StyledDiv = styled.div`
  display: flex;
  gap:10px
`