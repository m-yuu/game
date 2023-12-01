
const executionBtn = document.getElementById('executionBtn');
const foo = document.getElementById('foo');

executionBtn.addEventListener('click', () => {
	const number = document.getElementById('number');
	const Num = number.value;
	console.log(judge(Num));

	if(judge(Num) === false) {
		foo.innerHTML = Num + 'は素数ではありません';
	} else {
		foo.innerHTML = Num + 'は素数です';
	}
	
});


const judge = (Num) => {
	if(Num <= 1) return false;
	for(let i = 2; i < Num; i++) {
		if(Num % i === 0) {
			return false;
		}
	}
	return true;
}
