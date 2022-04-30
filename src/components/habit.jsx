import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = (event) => {
    //state 오브젝트 안의 count를 증가시킨 뒤, state를 업데이트 해줌
    // this.state.count += 1; 를 하면 업데이트 되었는지 알 수 없음
    this.setState({ count: this.state.count + 1});
  }
  handleDecrement = (event) => {
    const count = this.state.count -1;
    // count를 변수화시키고 count가 0보다 작으면 0을 출력하라는 조건을 추가
    this.setState({ count: count < 0 ? 0 : count });
  }
  render() {
    return (
      <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{this.state.count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete">
        <i className="fas fa-trash"></i>
      </button>
      </li>
    );
  }
}

export default Habit;