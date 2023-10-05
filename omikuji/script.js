const omikuji = document.getElementById('omikuji');

const result = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶']

omikuji.addEventListener('click', () => {
  const nmb = Math.floor(Math.random() * result.length);
  omikuji.innerHTML = result[nmb];
});
