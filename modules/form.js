import { createInput, createTextarea } from './input.js';
import { saveData } from './storage.js';

export function renderForm(root) {
  const container = document.createElement('div');
  container.className = 'container';

  const name = createInput('Nama');
  const email = createInput('Email');
  const pesan = createTextarea('Pesan');

  const btn = document.createElement('button');
  btn.textContent = 'Kirim';

  btn.onclick = () => {
    saveData({
      nama: name.value,
      email: email.value,
      pesan: pesan.value
    });
    alert('Tersimpan');
  };

  container.append(name, email, pesan, btn);
  root.appendChild(container);
}
