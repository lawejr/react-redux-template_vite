import { MutableRefObject, useEffect, useRef } from 'react';

export function usePrevious<T>(value: T) {
  const ref: MutableRefObject<T | undefined> = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
