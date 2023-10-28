// https://reactjs.org/docs/hooks-reference.html#usecallback
// https://zh-hant.reactjs.org/docs/hooks-reference.html#usecallback

import { useState, useCallback, memo, useMemo } from 'react';
import RenderTip from '@/components/RenderTip';
/**
 * 上方可以這樣寫是因為 jsconfig.json 有設定
 */

// TODO
const MemoComponent = memo(({ name, onClick, color }) => {
  console.log('MemoComponent render');
  return (
    <section data-name={`MemoComponent-${name}`} className={`style-${color}`}>
      <RenderTip />
      <button className="button" onClick={onClick}>
        call props.onClick
      </button>
    </section>
  );
});

const Example = () => {
  const [count, setCount] = useState(10);
  const atAssignCallback = () => {
    setCount((prev) => prev + 1);
  };

  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed
  const atMemoizedCallback = useCallback(() => {
    // setCount(count + 1); // wrong
    setCount((prev) => prev + 1); // correct
  }, []); // dependencies 有更新時，才建立新的 function

  // 以下等價上方的 atMemoizedCallback
  const atMemoizedCallbackEqualUseMemo = useMemo(() => {
    return () => {
      setCount((prev) => prev + 1);
    };
  }, []);
  return (
    <section data-name="Example15">
      <h1>count:{count}</h1>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        increment
      </button>
      <MemoComponent name="0" onClick={atAssignCallback} color="red" />
      <MemoComponent name="1" onClick={atMemoizedCallback} color="green" />
      <MemoComponent
        name="2"
        onClick={atMemoizedCallbackEqualUseMemo}
        color="green"
      />
    </section>
  );
};

export default Example;
