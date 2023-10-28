import React from 'react';

// https://reactjs.org/docs/hooks-reference.html#usestate
const Counter = () => {
  // TODO React hooks - useState
  const [count, setCount] = React.useState(0);
  /* 上面一行等於三面這三行
  const stateArr = React.useState(0);
  const count = stateArr[0];
  const setCount = stateArr[1];
  */

  const atClick = () => {
    // TODO
    setCount(count + 1);
  };
  return (
    <div className="border p-2 border-black">
      <h2 className="count">count:{count}</h2>
      <button className="button" onClick={atClick}>
        increment
      </button>
    </div>
  );
};

// FIXME，三分鐘的隨堂測試
/** 
 * 1 放兩個 Counter Component
 * 2 一個 count 為 0，另一個 count 為 1
 */
const Base1 = () => {
  return (
    <section data-name="Base1">
      <Counter />
    </section>
  );
};
export default Base1;
