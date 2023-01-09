import { useCallback } from 'react';
import { useImmer } from 'use-immer';
import { useAppSelector, useAppDispatch } from '~src/hooks';
import {
  decrement,
  incrementAsync,
  selectCount,
  selectCountStatus,
} from '~src/examples/domains/globalCounterSlice';
import { Button } from '~src/examples/components/Button';

export function IndexPage() {
  const [exampleState, setExampleState] = useImmer({
    title: 'Try Immer',
    count: 0,
  });
  const dispatch = useAppDispatch();
  const globalCount = useAppSelector(selectCount);
  const globalCountStatus = useAppSelector(selectCountStatus);

  const handleLocalClick = useCallback(() => {
    setExampleState(draft => {
      draft.count += 1;
    });
  }, [setExampleState]);

  return (
    <>
      <h2>Local</h2>
      <p>Counter: {exampleState.count}</p>
      <Button onClick={handleLocalClick}>Increment local</Button>
      <h2>Global</h2>
      <p>Counter: {globalCount}</p>
      <p>Global status: {globalCountStatus}</p>
      <Button onClick={() => dispatch(decrement())}>Decrement global</Button>
      <Button onClick={() => dispatch(incrementAsync(1))}>
        Async increment global
      </Button>
    </>
  );
}
