import React from 'react';
import RenderTip from '../RenderTip';
import useMyStore, { setState } from './useMyStore';

const ChildCount = React.memo(() => {
  // 不會有多餘的 render 也，好神
  const count = useMyStore((state) => state.count);
  return (
    <section data-name="store.count">
      <RenderTip />
      <h3>store.count:{count}</h3>
    </section>
  );
});

const Example = () => {
  const state = useMyStore();
  return (
    <section data-name="Example4">
      <div className="my-code">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <button
        className="my-btn"
        onClick={() => {
          setState((prevState) => ({
            count: prevState.count + 1,
          }));
        }}
      >
        increment
      </button>
      <button
        className="my-btn"
        onClick={() => {
          setState({
            text: `${Date.now()}`,
          });
        }}
      >
        text
      </button>
      <ChildCount />
    </section>
  );
};

export default Example;
