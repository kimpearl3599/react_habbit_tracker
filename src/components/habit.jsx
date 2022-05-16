import React, { PureComponent } from "react";

class Habit extends PureComponent {
  //사용자에 의해 컴포넌트가 등록되었을때 자동호출 (UI기준)
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }
  // 사용자가 삭제하기 전에 자동호출 (UI기준)
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }
  // 보여주기만 하는 컴포넌트이기 때문에 state 필요없음
  // 콜백함수를 단순히 호출만 하는 컴포넌트
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    console.log("habit");
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
