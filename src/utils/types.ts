function isObject(obj: unknown): obj is Record<string, any> {
  return !!obj && typeof obj === 'object' && !Array.isArray(obj);
}

function isNotNullOrUndefined<T>(obj: T): obj is Required<T> {
  return obj !== undefined && obj !== null;
}

type ArrayElement<ArrayType extends readonly unknown[] | undefined> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export { isObject, isNotNullOrUndefined, type ArrayElement };
