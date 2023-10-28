import { useFetchTodo } from './hooks/useFetchTodo';

// FIXME
import useWindowSize from './hooks/useWindowSize';

const CustomHooks = () => {
  // TODO
  const { isLoading, data } = useFetchTodo();
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <section data-name="Example16">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};
export default CustomHooks;
