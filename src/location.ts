export function updateLocation(location: Location, url: URL) {
  if (url.href != location.href) location.replace(url);
}

export function sanitizePath(url: URL) {
  if (!url.pathname.endsWith("/")) url.pathname += "/";
}

export function setSearchParam(url: URL, param: string, value: string | number) {
  const searchParams = url.searchParams;
  if (!searchParams.has(param)) searchParams.set(param, value.toString());
}

export function setFullscreen(url: URL) {
  setSearchParam(url, "max_w", 9999);
  setSearchParam(url, "max_h", 9999);
}

export function setInstantStart(url: URL) {
  setSearchParam(url, "istart", 1);
}
