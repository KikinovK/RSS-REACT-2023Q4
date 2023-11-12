const filterQueryParams = (params: URLSearchParams, keys: string[]): URLSearchParams => {
  const filteredParams = new URLSearchParams();

  for (const key of params.keys()) {
    if (keys.includes(key)) {
      filteredParams.append(key, params.get(key) || '');
    }
  }

  return filteredParams;
};

export default filterQueryParams;
