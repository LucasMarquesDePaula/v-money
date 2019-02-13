import { format, setCursor } from "./utils";

export function bind (element, options) {
  const target = getTarget(element);

  target.addEventListener("input", (event) => eventListener(target, options, event));
  target.addEventListener("change", (event) => eventListener(target, options, event));

  target.addEventListener("focus", () => {
    setCursor(target, target.value.length - options.suffix.length);
  });

  target.dispatchEvent(new Event("input"));
  target.dispatchEvent(new Event("change"));
}

function getTarget (el) {
  if (el.tagName.toLocaleUpperCase() === "INPUT") {
    return el;
  }

  // v-money used on a component that's not a input
  const els = el.getElementsByTagName("input");
  if (els.length !== 1) {
    throw new Error(`v-money requires 1 input, found ${els.length}`);
  }

  return els[0];
}

function run (target, options) {
  let positionFromEnd = target.value.length - target.selectionEnd;
  target.value = format(target.value, options);
  positionFromEnd = Math.max(positionFromEnd, options.suffix.length); // right
  positionFromEnd = target.value.length - positionFromEnd;
  positionFromEnd = Math.max(positionFromEnd, options.prefix.length + 1); // left
  setCursor(target, positionFromEnd);
}

function eventListener (target, options, event) {
  if (!event.isTrusted) {
    return;
  }
  run(target, options);
  target.dispatchEvent(new Event(event.type));
}
