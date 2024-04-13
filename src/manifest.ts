import { JSONSchemaForWebApplicationManifestFiles as Manifest } from "@schemastore/web-manifest";

export function createManifestLink(document: Document, data?: Manifest) {
  if (!data) {
    const url = new URL(document.location.href);
    data = getManifestData(document.head, url);
  }
  const link = document.createElement("link");
  link.rel = "manifest";
  link.href = createDataURI(JSON.stringify(data), "application/json");
  return link;
}

export function getManifestData(head: HTMLHeadElement, url: URL) {
  const root = new URL("/", url);
  const color = "#00c9ff";

  const manifest: Manifest = {
    name: head.querySelector<HTMLTitleElement>("title")?.text,
    description: getMetaContent(head, "description"),
    start_url: url.href,
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

export function getMetaContent(element: HTMLElement, name: string) {
  return element.querySelector<HTMLMetaElement>(`meta[name~="${name}"], meta[property~="${name}"]`)
    ?.content;
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
