export function createFab() {
  const fab = document.createElement("button");
  fab.id = "fab";
  return fab;
}

export function dispatchKeypress(data: KeyboardEventInit) {
  window.dispatchEvent(new KeyboardEvent("keydown", data));
	window.dispatchEvent(new KeyboardEvent("keyup", data));
}

export async function fadeIn(element: HTMLElement) {
  element.classList.add("fade", "invisible");
  await checkCondition(isPlaying);
  setTimeout(() => element.classList.remove("invisible"), 1000);
}

export function isPlaying() {
  return document.getElementById("play_content")?.style.display == "none";
}

export function checkCondition(condition: () => boolean, interval = 250): Promise<void> {
  return new Promise((res) => {
    if (condition()) return res();
    const intervalId = setInterval(() => {
      if (!condition()) return;
      clearInterval(intervalId);
      res();
    }, interval);
  });
}
