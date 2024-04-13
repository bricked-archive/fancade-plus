import { JSONSchemaForWebApplicationManifestFiles as Manifest } from "@schemastore/web-manifest";

function getMetaContent(element: HTMLElement, name: string) {
  return element.querySelector<HTMLMetaElement>(`meta[name~="${name}"], meta[property~="${name}"]`)
    ?.content;
}

export function getManifestData(head: HTMLHeadElement, url: URL) {
  const root = new URL("/", url);
  const start = new URL(url);
  if (!start.pathname.endsWith("/")) start.pathname += "/";
  start.searchParams.set("istart", "1");
  start.searchParams.set("max_w", "9999");
  start.searchParams.set("max_h", "9999");
  const color = "#00c9ff";

  const manifest: Manifest = {
    name: head.querySelector<HTMLTitleElement>("title")?.text,
    description: getMetaContent(head, "description"),
    start_url: start.href,
    scope: root.href,
    display: "fullscreen",
    theme_color: color,
    background_color: color,
    icons: [
      {
        src: getMetaContent(head, "og:image") ?? "",
        type: "image/png",
        sizes: "192x192 512x512",
      },
    ],
  };
  return manifest;
}

export function createDataURI(data: string, mediatype?: string, base64?: false): string;
export function createDataURI(data: Buffer, mediatype: string, base64: true): string;
export function createDataURI(data: string | Buffer, mediatype = "", base64 = false) {
  const base = `data:${mediatype}`;

  if (base64) {
    return `${base};base64,${data.toString("base64")}`;
  } else {
    return `${base},${encodeURIComponent(data as string)}`;
  }
}
