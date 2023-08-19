export function objectToQueryString(obj: object): string {
  const queryString = Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`)
    .join('&');

  return queryString ? `?${queryString}` : '';
}
