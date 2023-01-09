import {
  Clazz,
  ClazzOrModelSchema,
  custom,
  deserialize,
  list,
  PropSchema,
  SKIP,
} from 'serializr';
import * as Sentry from '@sentry/react';

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

function readonly(model?: Clazz<unknown>): PropSchema {
  return custom(
    () => SKIP,
    (rawData: unknown) => {
      if (!rawData) {
        return null;
      }

      return model ? deserialize(model, rawData) : rawData;
    },
  );
}

function nullableList(schema: PropSchema): PropSchema {
  return list(schema, {
    beforeDeserialize: (callback, jsonValue) =>
      callback(null, Array.isArray(jsonValue) ? jsonValue : []),
  });
}

export { safeDeserialize, readonly, nullableList };
