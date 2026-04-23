export function saveData(data) {
  const old = JSON.parse(localStorage.getItem('form')) || [];
  old.push(data);
  localStorage.setItem('form', JSON.stringify(old));
}
