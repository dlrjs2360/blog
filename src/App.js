import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["개발중임", "개발중임1", "개발중임2"]); //새로고침 없이 재랜더링 가능
  let posts = {
    color: "skyblue",
    fontSize: "25px",
  };

  let [up, upchange] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState("");

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = "버튼에 의해 변경";
    글제목변경(newArray);
  }

  function modal나타내기() {
    modal변경(!modal);
  }

  function up올리기(j) {
    let newup = [...up];
    newup[j] = up[j] + 1;
    upchange(newup);
  }

  function 글추가(y) {
    let newArray = [...글제목];
    newArray.push(y);
    글제목변경(newArray);
    let newup = [...up];
    newup.push(0);
    upchange(newup);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={posts}> 개발 Blog </div>
      </div>
      <div className="list">
        <button className="button" onClick={제목바꾸기}>
          버튼
        </button>
      </div>
      {글제목.map((글, i) => {
        return (
          <div className="list" key={i}>
            <h3>
              <span
                onClick={() => {
                  누른제목변경(i);
                }}>
                {글}
              </span>
              <span
                onClick={() => {
                  up올리기(i);
                }}>
                👍
              </span>
              {up[i]}
            </h3>
            <p> 12월 17일 </p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            글추가(입력값);
          }}>
          저장
        </button>
      </div>

      <button onClick={modal나타내기}> 열고닫기 </button>
      {modal ? <Modal 글제목={글제목} 내가방금누른제목넘버={누른제목}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2> {props.글제목[props.내가방금누른제목넘버]} </h2>
        <p> 날짜</p>
        <p> 상세내용 </p>
      </div>
    </>
  );
}

export default App;
