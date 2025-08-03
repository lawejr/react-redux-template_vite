import { isErrorWithData } from './utils';

export class BaseError {
  constructor(raw: any) {
    if (isErrorWithData(raw)) {
      this.message =
        typeof raw.data === 'string'
          ? JSON.stringify(raw.data)
          : raw.data.message;
    }

    if ('status' in raw && typeof raw.status === 'number') {
      this.status = raw.status;

      return;
    }

    if ('originalStatus' in raw && typeof raw.originalStatus === 'number') {
      this.status = raw.originalStatus;

      return;
    }

    this.status = 500;
  }

  status: number;

  message?: string;
}
