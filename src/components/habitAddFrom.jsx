import React, { memo } from "react";

const HabitAddFrom = memo((props) => {
  console.log("habitAddFrom");
  const formRef = React.createRef();
  // input의 value 값에 접근해야하는데
  // 리액트에서는 DOM 요소를 직접적으로 쓰지 않기때문에
  // 다른 리액트의 요소에 접근을 하고 싶다면
  // Refs를 사용함
  const inputRef = React.createRef();
  // 기본적으로 submit이 되면 새로고침됨
  // 새로고침되지 않도록 처리해줌
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    // name이 어떤 값을 가진다면, 뒤의 것을 실행
    name && props.onAdd(name);
    // this.inputRef.current.value = "";
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddFrom;
