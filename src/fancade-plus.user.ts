import { createManifestLink } from "./manifest";
import { updateLocation, sanitizePath, setFullscreen, setInstantStart } from "./location";
import { thanosSnap } from "./interface";

document.head.append(createManifestLink(document));

const url = new URL(document.location.href);
sanitizePath(url);
setInstantStart(url);
setFullscreen(url);
updateLocation(document.location, url);

thanosSnap(document.getElementById("qc-cmp2-container")); // Yes, I would please like to take your cookies
