import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map((d) => {
      if (d.id === id) {
        d.completed = !d.completed;
      }
      return d;
    });
    setTodoData(newTodoData);
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",

      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((d) => d.id !== id); //새로운 주소값 0x1004
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((d) => (
        <div style={getStyle(d.completed)} key={d.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleCompleteChange(d.id)}
          />
          {d.title}
          <button style={btnStyle} onClick={() => handleClick(d.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
