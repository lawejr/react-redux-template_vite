import { useMemo } from 'react';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from './useAppDispatch';

/**
 * @readonly DON'T USE!
 * @todo need right typing
 */
export const useActionCreators = (actions: ActionCreatorsMapObject) => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch],
  );
};
