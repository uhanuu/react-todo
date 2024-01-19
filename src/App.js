import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  const getStyle = (completed) => {
    return {
      padding: "10px",

      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  }

  const handleClick = (id) => {
    let newTodoData = todoData.filter(d => d.id !== id); //새로운 주소값 0x1004
    setTodoData(newTodoData);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map(d => {
      if (d.id === id) {
        d.completed = !d.completed;
      }
      return d;
    })
    setTodoData(newTodoData);
  }

  const handleSubmit = (e) => {
    //새로고침 방지
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    // value 지우기
    setTodoData(pre => [...pre, newTodo]);
    setValue("");
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        {todoData.map(d => (
          <div style={getStyle(d.completed)} key={d.id}>
            <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(d.id)} />
            {d.title}
            <button style={btnStyle} onClick={() => handleClick(d.id)}>x</button>
          </div>
        ))}

        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: '1' }}
          />

        </form>

      </div>
    </div>
  )
}