import { getManifestData, createDataURI } from "./manifest";

try {
  const url = new URL(document.location.href);
  const manifestData = getManifestData(document.head, url);

  const manifestLink = document.createElement("link");
  manifestLink.rel = "manifest";
  manifestLink.href = createDataURI(JSON.stringify(manifestData), "application/json");
  document.head.append(manifestLink);
} catch (err) {
  alert(err);
}
