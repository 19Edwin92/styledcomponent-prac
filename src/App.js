import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Button from './Button'
import { IoIosArrowForward } from 'react-icons/io'
import { VscBellDot } from 'react-icons/vsc'
import Input from './Input'
import img01 from './img/img01.png'
import refex from './img/refex.png'

function App() {
  const orange = "#EDA594"
  const green = "#55efc4"
  const [value, setValue] = useState({
    name:'',
    num:'',
    edit1:false,
    edit2:false,
    selectbox1:false,
    selectbox2:false,
    select1:'아래에서 선택해주세요.',
    select2:'아래에서 선택해주세요.',
  })

  // const inputPriceFormat = (str) => {
  //   const comma = (str)=> {
  //     str = String(str);
  //     return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  //   };
  //   const uncomma = (str) => {
  //     str = String(str);
  //     return str.replace(/[^\d]+/g, "");
  //   };
  //   return comma(uncomma(str));
  // }

  const inputPriceFormat2 = (str) => {
    const trans = str.replace(/[^\d]+/g, "")
                     .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    return trans
  }

  const handler = (e) => {
    setValue(
      e.target.name === 'num' ? 
      {...value, [e.target.name] : inputPriceFormat2(e.target.value)} 
      : 
      {...value, [e.target.name] : e.target.value}
    )
  }
  return (
    <>
    <CreateGrobal />
    <h1>button</h1> 
    <p>BUTTON 컴포넌트 제어하기</p>
    <p><span className='label'>- size(1)</span> : huge(color 제어 : border에만 적용, background는 transparent)</p>
    <p><span className='label'>- size(2)</span> : large, medium, small(default)</p>
    <p><span className='label'>- color</span> : red, green</p>
    <PracticeDiv1>
        <div> 
          <Button size="huge" color={orange} event={()=>alert("버튼을 만들어봅시다.")}>Large Primary Button <IoIosArrowForward/></Button>
          <Button size="large" color={orange} label="BUTTON" />
          <Button size="medium"  color={orange} label="BUTTON" />
          <Button color={orange} label="BUTTON" />
        </div>
        <div>
        <Button size="huge" color={green} event={()=>prompt("어렵나요?")}>Large Negative Button <VscBellDot/></Button>
          <Button size="large" color={green} label="BUTTON" />
          <Button size="medium" color={green} label="BUTTON" />
          <Button color={green} label="BUTTON" />
        </div>
    </PracticeDiv1>


    <h1>input</h1>
    <div>
    <p>INPUT 컴포넌트 제어하기 : 정규표현식</p>
    <p><span className='label'>- 정규표현식 : <span style={{color:"red"}}>x(?=y)</span></span>란? (y)가 존재하면서, x가 존재하는 것을 찾는, 전방탐색을 의미한다.</p>
    <p>아래의 코드를 읽어보자. /(\d)(?=(?:\d{3})...)/ (연속되는 3개의 숫자, y)가 존재하면, 앞에 있는 x가 숫자인 것을 매칭시킨다는 말이다.</p>
    <p><span className='label'>- 정규표현식 : <span style={{color:"red"}}>x(?!y)</span></span>란? 부정 전방탐색으로, y를 만족하면서 전방에 x가 없는 경우를 말한다.</p>
    <p><span className='label'>- 정규표현식 : <span style={{color:"red"}}>x+</span></span>란 x의 반복을 의미한다.</p>
    <p> 핵심은 (\b)에서 생성한 그룹에 달려있다. 해당 그룹이 생성되는지의 여부에 따라서 정규표현식은 동작한다.</p>
    <p><img src={img01}/></p>
    <p><img src={refex}/></p>
    </div>
    <PracticeDiv2>
      <div>
        <p>이름</p>
        <p><Input type="text" value={value.name} name="name" onChange={handler}/></p>
        <p>가격</p>
        <p><Input type="text" value={value.num} name="num" onChange={handler}/></p>
        <p><Button color={green} label="저장" event={()=>{
          alert(JSON.stringify(value).replace(/"/g,''));
          setValue({
            name:'',
            num:''
          })
        }}/></p>
      </div>
    </PracticeDiv2>


      <h1>Modal</h1>
      <PracticeDiv3>
        <Button color={green} event={() => setValue({ ...value, edit1: true })
        }>open modal</Button>
        <Button size="huge" color={orange} event={() => setValue({ ...value, edit2: true })}
        >open modal2</Button>
      </PracticeDiv3>
      {value.edit1 && (<>
        <Modal1 state={value.edit1} />
        <ModalinnerBox>
          <div><p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p></div>
          <div>
            <Button color={green} event={() => setValue({ ...value, edit1: false })}>닫기</Button>
            <Button color={orange}>확인</Button>
          </div>
        </ModalinnerBox>
      </>)}
      {value.edit2 && (<>
        <Modal1 state={value.edit2} onClick={() => setValue({ ...value, edit2: false })} />
        <ModalinnerBox>
          <div><p>닫기 버튼 1개가 있고,<br /> 외부 영역을 누르면 모달이 닫혀요.</p></div>
          <div>
            <Button color={green} event={() => setValue({ ...value, edit2: false })}>닫기</Button>
          </div>
        </ModalinnerBox>
      </>)}



      <h1>Select</h1>
      <PracticeDiv4>
        <div>
          <button onClick={()=>{setValue({...value, selectbox1:!(value.selectbox1)})}}><span>{value.select1}</span> ▼</button>
          {value.selectbox1 && (
            <div className='SelectBoxDiv'>
            <button onClick={(e)=> {setValue({...value, select1:e.target.value})}} className='SelectBox' value="리액트">리액트</button>
            <button onClick={(e)=> {setValue({...value, select1:e.target.value})}} className='SelectBox' value="자바">자바</button>
            <button onClick={(e)=> {setValue({...value, select1:e.target.value})}} className='SelectBox' value="스프링">스프링</button>
            <button onClick={(e)=> {setValue({...value, select1:e.target.value})}} className='SelectBox' value="리액트 네이티브">리액트 네이티브</button>
          </div> 
          )}
        </div>
        <div style={{overflow:'hidden'}}>
          <button onClick={()=>{setValue({...value, selectbox2:!(value.selectbox2)})}}><span>{value.select2}</span> ▼</button>
          {value.selectbox2 && (
            <div className='SelectBoxDiv2'>
            <button onClick={(e)=> {setValue({...value, select2:e.target.value})}} className='SelectBox' value="리액트">리액트</button>
            <button onClick={(e)=> {setValue({...value, select2:e.target.value})}} className='SelectBox' value="자바">자바</button>
            <button onClick={(e)=> {setValue({...value, select2:e.target.value})}} className='SelectBox' value="스프링">스프링</button>
            <button onClick={(e)=> {setValue({...value, select2:e.target.value})}} className='SelectBox' value="리액트 네이티브">리액트 네이티브</button>
          </div> 
          )}
        </div>
      </PracticeDiv4>  
        
    </>
  )
}

export default App

const CreateGrobal = createGlobalStyle`
  body {
    width: 95%;
    margin: auto;
  }

  span[class='label'] {
    font-weight: 800;
  }

  img {
    width: 100%;
  }
`
const PracticeDiv1 = styled.div`
width: 90%;
margin: auto;

div {
  margin-top:10px;
  display: flex;
  gap: 5px;
}
`
const PracticeDiv2 = styled.div`
width: 90%;
height: 100px;
margin: auto;
/* background-color: rgba(0,0,0,0.2); */

div {
  margin-top:10px;
  display: grid;
  grid-template-columns: 28px 1fr 28px 1fr 100px;
  gap: 10px;

  p {
    display: flex;
    align-items: center;
  }
}
`

const PracticeDiv3 = styled.div`
  width: 90%;
  height: 100px;
  margin: auto;
  display: flex;
  gap: 10px;
  /* background-color: rgba(0,0,0,0.2); */
`
const Modal1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
`

const ModalinnerBox = styled.div`
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 200px;
  background: white;
  border: none;
  border-radius: 15px;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-rows: 1fr 30px;

  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    gap:10px;
    button {
      display: block;
    }
  }

  p {
    text-align: center;
    font-weight:800;
    font-size: 25px;
  }
`

const PracticeDiv4 = styled.div`
  width: 90%;
  height: 100px;
  margin: auto;
  border: 2px solid gray;
  border-radius: 10px;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr;

  gap: 10px;
  margin-bottom: 20px;

  button {
    width: 80%;
    height: 30px;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: transparent;
    margin-top: 10px;

    span {
      display: inline-block;
      width: 150px;
    }
  }
  div[class='SelectBoxDiv'] {
    background-color: white;
    width: 78%;
    height: 120px;
    position: relative;
    top: 5px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 0 auto;
    z-index: 999;
    overflow: hidden;

    button[class='SelectBox']{
      display: inline-block;
      margin: 0;
      width: 100%;
      border: none;
      &:hover {
        background-color: rgba(0,0,0,0.1);
      }
      border-radius: 0;
    }
  }
  div[class='SelectBoxDiv2'] {
    background-color: white;
    width: 78%;
    height: 120px;
    position: relative;
    top: 5px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 0 auto;
    z-index: 999;
    overflow: hidden;

    button[class='SelectBox']{
      display: inline-block;
      margin: 0;
      width: 100%;
      border: none;
      &:hover {
        background-color: rgba(0,0,0,0.1);
      }
      border-radius: 0;
    }
  }
`

// div className='SelectBoxDiv'>
//           <button className='SelectBox'></button>