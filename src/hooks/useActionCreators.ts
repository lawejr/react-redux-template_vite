import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  ActionCreator,
  ActionCreatorsMapObject,
  AsyncThunk,
  bindActionCreators,
} from '@reduxjs/toolkit';
import { AppDispatch } from '~/store';

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
    ? BoundAsyncThunk<Actions[key]>
    : Actions[key];
};

type BoundAsyncThunk<Action extends ActionCreator<any>> = (
  ...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>;

const useAppDispatch = () => useDispatch<AppDispatch>();

export const useActionCreators = <
  Actions extends ActionCreatorsMapObject = ActionCreatorsMapObject,
>(
  actions: Actions, // eslint-disable-line indent
  // eslint-disable-next-line indent
): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch],
  );
};
