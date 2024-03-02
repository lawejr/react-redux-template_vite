function isObject(obj: unknown): obj is Record<string, any> {
  return !!obj && typeof obj === 'object' && !Array.isArray(obj);
}

export { isObject };
