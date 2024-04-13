import { createManifestLink } from "./manifest";
import { updateLocation, sanitizePath, setFullscreen, setInstantStart } from "./location";
// @ts-expect-error bundler 
import css from "./style.css"

document.head.append(createManifestLink(document));

const url = new URL(document.location.href);
sanitizePath(url);
setInstantStart(url);
setFullscreen(url);
updateLocation(document.location, url);

const style = document.createElement("style");
style.innerHTML = css;
document.head.append(style)
