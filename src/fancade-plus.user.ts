import { createManifestLink } from "./manifest";
import { updateLocation, sanitizePath, setFullscreen, setInstantStart } from "./location";

document.head.append(createManifestLink(document));

const url = new URL(document.location.href);
sanitizePath(url);
setInstantStart(url);
setFullscreen(url);
updateLocation(document.location, url);
