import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { IoIosArrowForward } from 'react-icons/io'
import { BsAlarm } from 'react-icons/bs'



function App() {
  const [text, setText] = useState()
  const [num, setNum] = useState()
  const outSection = useRef();
  const [modal1, setmodal1] = useState(false)
  const [modal2, setmodal2] = useState(false)
  const [select, serftSelect] = useState(false)
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
      <Button color={pinktitle} size={medium} onClick={()=> setmodal2((pre)=> !pre)}>open modal</Button>
      <Modal state={modal1}>
          <div className='modalbox'>
            <div>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
            </div>
            <div>
              <Button color={pink} size={small} onClick={() => setmodal1((pre) => !pre)}>닫기</Button>
              <Button color={green} size={small}>확인</Button>
            </div>
          </div>
      </Modal>

        {modal2 === true && (
          <>
            {/* 왜 안될까? */}
            <Modal2 ref={outSection} state={modal2} onClick={e => {if(outSection.current === e.target){ setmodal2(false)}}} />
            <Modal3 state={modal2}>
              <div className='modalbox2'>
                <div>
                  닫기 버튼 1개가 있고 외부 영역을 누르면 모달이 닫혀요.
                </div>
                <div>
                  <Button color={pink} size={small} onClick={() => setmodal2((pre) => !pre)} >닫기</Button>
                  {/* <Button color={green} size={small}>확인</Button> */}
                </div>
              </div>
            </Modal3>
          </>
          )}
      </Article>
      <h1>Select</h1>
      <SelectLayout>
        <Select1>
          <span>선택해 주세요 ▼</span>
        </Select1>
      </SelectLayout>

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
const small = {width:"100px", height:"40px", fontSize:"15px"}



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
                state ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(-50%, -50%); */
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0,0.7);
  border-radius: 10px;
  


  .modalbox {
    background-color: white;
    width: 400px;
    height: 200px;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    color: black;
    font-weight: 800;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    div:nth-child(1) {
      height: 80%;
    }
    div:nth-child(2) {
      display: flex;
      justify-content: flex-end;
      gap:5px;
    }
  }
`

const Modal2 = styled.div`
  display: ${({state})=> 
                state ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(-50%, -50%); */
  background-color: rgb(0,0,0,0.7);
  width: 100%;
  height: 100%;
`

const Modal3 = styled.div`
  display: ${({state})=> 
                state ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(-50%, -50%); */
  width: 100%;
  height: 100%;

  .modalbox2 {
  background-color: white;
  width: 400px;
  height: 200px;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  color: black;
  font-weight: 800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div:nth-child(1) {
    height: 80%;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    gap:5px;
  }
}
`

const SelectLayout = styled.div`
  width: 95%;
  height: 150px;
  border: 2px solid gray;
  margin: auto;
  border-radius: 10px;
`
const Select1 = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 20px;
  position: relative;
  top: 20px;
  left: 20px;
  text-align: center;
  line-height: 50px;
`

const SelectOption = styled.div`
  width: 300px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
`