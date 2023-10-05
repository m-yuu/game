
let janken = ['ぐー', 'ちょき', 'ぱー'];

const yourJanken = document.getElementById('your-hand');
const enemyJanken = document.getElementById('enemy-hand');
const click = document.getElementById('click');

click.addEventListener('click', () => {
  const nmb = Math.floor(Math.random() * janken.length);
  const result = janken[nmb];
  yourJanken.innerHTML = result;
  enemyJanken.innerHTML = result;
});




