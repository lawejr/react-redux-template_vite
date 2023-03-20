import { useCallback } from 'react';
import { useImmer } from 'use-immer';
import { Button } from '~/examples/UIKit/Button';
import {
  counterActions,
  incrementAsync,
  selectCount,
  selectCountStatus,
} from '~/examples/domains/globalCounterSlice';
import { useActionCreators, useAppSelector } from '~/hooks';
import car from '~/assets/car.svg';

const allActions = {
  ...counterActions,
  incrementAsync,
};

export function IndexPage() {
  const [exampleState, setExampleState] = useImmer({
    title: 'Try Immer',
    count: 0,
  });
  const globalCount = useAppSelector(selectCount);
  const globalCountStatus = useAppSelector(selectCountStatus);
  const actions = useActionCreators(allActions);

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
      <Button onClick={actions.decrement}>Decrement global</Button>
      <Button onClick={() => actions.incrementAsync(1)}>
        Async increment global
      </Button>
      <br />
      <img src={car} alt="Car" />
    </>
  );
}
