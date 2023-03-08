import React from 'react'
import styled from 'styled-components'

function Input({type, value, name, onChange}) {
  return (
    <>
      <Inputs required type={type} value={value} name={name} onChange={onChange}/>
    </>
  )
}

export default Input

const Inputs = styled.input`
  border-radius:10px;
  border:  1px solid black;
  width: 95%;
  height: 30px;
  padding-left: 10px;
  &:focus {
    outline:none;
    border:  2px solid black;
  }
  

`