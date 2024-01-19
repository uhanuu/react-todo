import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      testDecoration: "none"
    }
  }

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter(d => d.id!== id); //새로운 주소값 0x1004
    this.setState({ todoData: newTodoData })
  }

  state = { //0x1000
    todoData: [
      {
        id: 1,
        title: "공부하기",
        completed: true
      },
      {
        id: 2,
        title: "청소하기",
        completed: false
      },
    ],
    value: ""
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map(d => (
            <div style={this.getStyle()} key={d.id}>
              <input type="checkbox" defaultChecked={false} />
              {d.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(d.id)}>x</button>
            </div>
          ))}

        </div>
      </div>
    )
  }
}