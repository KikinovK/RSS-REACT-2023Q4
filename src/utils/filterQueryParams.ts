const filterQueryParams = (params: URLSearchParams, keys: string[]): string => {
  for (const key of params.keys()) {
    if (!keys.includes(key)) {
      params.delete(key);
    }
  }
  return params.toString();
};

export default filterQueryParams;
