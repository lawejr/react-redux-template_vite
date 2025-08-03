import { isObject } from '~/utils/types';

type PlainError = {
  status: number;
};

type ErrorWithData = {
  status: number;
  data: { message?: string };
};

function isErrorObject(obj: unknown): obj is PlainError {
  return isObject(obj) && 'status' in obj && typeof obj.status === 'number';
}

function isNotFoundError(error: unknown): boolean {
  return isErrorObject(error) && error.status === 404;
}

function isErrorWithData(error: unknown): error is ErrorWithData {
  return isErrorObject(error) && 'data' in error;
}

export { type PlainError, type ErrorWithData, isNotFoundError, isErrorWithData }
