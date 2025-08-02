import { RefObject, useEffect, useRef } from 'react';

export function usePrevious<T>(value: T) {
  const ref: RefObject<T | undefined> = useRef(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
