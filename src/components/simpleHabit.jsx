import React, { useCallback, useEffect, useState } from "react";

const SimpleHabit = (props) => {
  // 실제의 state 값과 카운드를 업데이트 할 수 있는 setCount 함수를 받아옴
  const [count, setCount] = useState(0);
  // const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  //비어있는 배열을 전달하면 mount시에만 호출
  // 배열안에 변경됨을 감지할 수 있는 값을 넣어주면 해당하는 값이
  // 변할때마다 useEffect API가 호출됨
  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  }, []);

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
