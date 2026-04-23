export function createInput(placeholder) {
  const el = document.createElement('input');
  el.placeholder = placeholder;
  return el;
}

export function createTextarea(placeholder) {
  const el = document.createElement('textarea');
  el.placeholder = placeholder;
  return el;
}
