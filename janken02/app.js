function R_Click() {
  let janken = ['グー', 'チョキ', 'パー'];

  let janken_r = Math.floor(Math.random() * 3);
  let p_janken_r = Math.floor(Math.random() * 3);

  document.getElementById('Rejan2').innerHTML = '相手は' + janken[janken_r] + 'を選びました';
}
