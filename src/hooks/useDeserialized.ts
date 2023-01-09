import { useMemo } from 'react';
import { ClazzOrModelSchema, list, object, serializable } from 'serializr';
import { safeDeserialize } from '~src/utils/serializers';

type Result<A, B> = A extends Array<any> ? Array<B> : B;

// Хук для сериализации данных с сервара используется непосредственно во view,
// чтобы в сторе хранить только serializable данные
export function useDeserialized<T, D extends Array<anyObject> | anyObject>(
  model: ClazzOrModelSchema<T>,
  rowData: D,
) {
  const serialized = useMemo(() => {
    const isArray = Array.isArray(rowData);

    if (isArray) {
      class ListResponse {
        @serializable(list(object(model)))
        result: Array<T> = [];
      }

      return (
        safeDeserialize(ListResponse, prepareListResponse(rowData))?.result ||
        []
      );
    }

    return safeDeserialize(model, rowData);
  }, [rowData, model]);

  return serialized as Result<D, T>;
}

function prepareListResponse(arr: unknown) {
  return { result: arr };
}
