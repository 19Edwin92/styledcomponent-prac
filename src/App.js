import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import { IoIosArrowForward } from 'react-icons/io'
import { BsAlarm } from 'react-icons/bs'


function App() {
  const [text, setText] = useState()
  const [num, setNum] = useState()
  const [modal1, setmodal1] = useState(true)
  const inputPriceFormat = (str) => {
    const comma = (str)=> {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  }

  return (
    <>
    <h1>Button</h1>
      <Article>
        <Button color={greentitle} size={large} onClick={()=>alert("버튼을 만들어보세요")}>Large Primary Button <IoIosArrowForward /> </Button>
        <Button color={green} size={medium}>BUTTON</Button>
        <Button color={green} size={small}>BUTTON</Button>
      </Article>
      <Article>
        <Button color={pinktitle} size={large} onClick={()=>prompt("어렵나요?")}>Large Negative Button <BsAlarm/> </Button>
        <Button color={pink} size={medium}>BUTTON</Button>
        <Button color={pink} size={small}>BUTTON</Button>
      </Article>
    <h1>Input</h1>
      <Article>
        
        <div>
          이름<input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div>
          가격<input type="text" value={num} onChange={(e)=> setNum(inputPriceFormat(e.target.value))}/>
        </div>
        <div>
          <Button color={green} size={small} onClick={()=>{alert(JSON.stringify({ name:text, price:num }).replace(/"/g,''))}}>BUTTON</Button>
        </div>
        
      </Article>
      <h1>Modal</h1>
      <Article>
      <Button color={green} size={small} onClick={()=> setmodal1((pre)=> !pre)}>open modal</Button>
      <Button color={pinktitle} size={medium}>open modal</Button>
      <Modal state={modal1}>
          <div>나는 모달 <button onClick={()=> setmodal1((pre)=> !pre)}>버튼</button></div>
      </Modal>

      </Article>

    </>
  )
}

export default App;

const greentitle = {current:"white", hover:"#white", active:"gray", border:"#72C255", font:"black"}
const green = {current:"#72C255", hover:"#ABDD99", active:"#44A720", border:"#72C255", font:"white"}
const pinktitle = {current:"white", hover:"#white", active:"gray" , border:"#FF5EDE", font:"black"}
const pink = {current:"#FF5EDE", hover:"#FF9EEB", active:"#FF1FD2" , border:"#FF5EDE", font:"white"}
const large = {width:"300px", height:"80px", fontSize:"23px"}
const medium = {width:"150px", height:"50px", fontSize:"20px"}
const small = {width:"100px", height:"30px", fontSize:"15px"}

const Article = styled.article`
  margin: 0 auto;
  width: 95%;
  height: 100px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
`

const Modal = styled.div`
  display: ${({state})=> 
                state ? 'none' : 'block'};
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 300px;
  background-color:gray;
  border-radius: 10px;
  


  div {
    background-color: #72C255;
    width: 150px;
    height: 100px;
    text-align: center;
    color: white;
    line-height: 100px;
    font-weight: 800;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`