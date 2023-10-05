const saikoro = document.getElementById('dice');

saikoro.addEventListener('click', () => {
  const nmb = Math.floor(Math.random() * 6 + 1);
  saikoro.innerHTML = nmb;
});