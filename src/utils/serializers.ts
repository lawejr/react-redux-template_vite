import * as Sentry from '@sentry/react';
import dayjs from 'dayjs';
import {
  AdditionalPropArgs,
  ClazzOrModelSchema,
  PropSchema,
  SKIP,
  custom,
  deserialize,
  list,
  primitive,
} from 'serializr';
import { URL_DATE_FORMAT, date as dateFormatter } from './date';

function safeDeserialize<T>(
  modelSchema: ClazzOrModelSchema<T>,
  json: unknown,
  callback?: (error: any, result: T) => void,
  customArgs?: any,
): T {
  if (!json) {
    Sentry.captureException({
      error: null,
      message:
        'Не удалось десериализовать данные с сервера, получены пустые данные',
      schema: modelSchema,
    });
  }

  function defaultCallback(error: any, result: T) {
    if (error) {
      Sentry.captureException({
        error,
        message: 'Не удалось десериализовать данные с сервера',
        schema: modelSchema,
        deserializationResult: result,
      });
    }
  }

  return deserialize(
    modelSchema,
    json,
    callback || defaultCallback,
    customArgs,
  );
}

function readonly(schema?: PropSchema): PropSchema {
  return custom(
    () => SKIP,
    (rawData: unknown, context, _, callback) => {
      if (!rawData) {
        return null;
      }

      return schema?.deserializer(rawData, callback, context);
    },
  );
}

function writeIds(args?: AdditionalPropArgs) {
  return {
    ...list(primitive(), { ...args }),
    serializer: (value: Array<string>) => value || SKIP,
  };
}

function nullableList(schema: PropSchema): PropSchema {
  return list(schema, {
    beforeDeserialize: (callback, jsonValue) =>
      callback(null, Array.isArray(jsonValue) ? jsonValue : []),
  });
}

function nullablePrimitive(args?: AdditionalPropArgs): PropSchema {
  return {
    ...primitive(args),
    serializer: (value?: string | number | null) => {
      if (value === '') {
        return null;
      }

      return value;
    },
  };
}

const date: (format?: string) => PropSchema = (format = URL_DATE_FORMAT) =>
  custom(
    val =>
      val instanceof Date || dayjs.isDayjs(val) || typeof val === 'string'
        ? dateFormatter(val, URL_DATE_FORMAT)
        : val,
    val => (typeof val === 'string' ? dayjs(val, format) : val),
  );

export {
  safeDeserialize,
  readonly,
  writeIds,
  nullableList,
  date,
  nullablePrimitive,
};
