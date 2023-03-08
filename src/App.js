import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Button from './Button'
import { IoIosArrowForward } from 'react-icons/io'
import { VscBellDot } from 'react-icons/vsc'
import Input from './Input'
import img01 from './img/img01.png'

function App() {
  const orange = "#EDA594"
  const green = "#55efc4"
  const [value, setValue] = useState({
    name:'',
    num:''
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
    <p>아래의 코드를 읽어보자. /...(?:\d{3})+(?!\d))/ 를 읽어보면, 연속되는 3개의 숫자가 반복되면을 의미한다. </p>
    <p><span className='label'>- replace 안에 있는 내용</span>을 읽어보면 이렇다. <span style={{color:"red"}}>"$1,"</span> 이 역시도 정규표현식인데, 앞에서 생성한 정규표현식의 그룹마다 ,(콤마)를 찍어주자는 말이다.</p>
    <p> 핵심은 (\b)에서 생성한 그룹에 달려있다. 해당 그룹이 생성되는지의 여부에 따라서 정규표현식은 동작한다.</p>
    <p> 숫자가 3자리 이하일 때, </p>
    <p><img src={img01}/></p>
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
    <Button color={green}>open modal</Button>
    <Button size="huge" color={orange}>open modal2</Button>
    </PracticeDiv3>
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
background-color: rgba(0,0,0,0.2);

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
  background-color: rgba(0,0,0,0.2);
`