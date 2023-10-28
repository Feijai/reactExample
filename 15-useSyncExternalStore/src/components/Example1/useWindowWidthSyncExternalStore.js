import { useSyncExternalStore } from 'react';

const subscribeResize = (listener) => {
  window.addEventListener('resize', listener);
  return () => {
    window.removeEventListener('resize', listener);
  };
};

export default function useWindowWidth() {
  const width = useSyncExternalStore(subscribeResize, () => window.innerWidth);
  return width;
}
