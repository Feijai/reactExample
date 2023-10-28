import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
import Example5 from './Example5';
import Example6 from './Example6';

// areHookInputsEquals
// https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.new.js#L326-L371

const Example = () => {
  return (
    <section data-name="Example08">
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
      <Example6 />
    </section>
  );
};
export default Example;
