export function UsePrependTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}
