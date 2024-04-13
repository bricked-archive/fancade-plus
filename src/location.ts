export function updateLocation(location: Location, url: URL) {
  if (url.href != location.href) location.replace(url);
}

export function sanitizePath(url: URL) {
  if (!url.pathname.endsWith("/")) url.pathname += "/";
}

export function setSearchParam(url: URL, param: string, value: string | number, enable: boolean) {
  if (enable) url.searchParams.set(param, value.toString());
  else url.searchParams.delete(param);
}

export function setFullscreen(url: URL, enable = true) {
  setSearchParam(url, "max_w", 9999, enable);
  setSearchParam(url, "max_h", 9999, enable);
}

export function setInstantStart(url: URL, enable = true) {
  setSearchParam(url, "istart", 1, enable);
}
