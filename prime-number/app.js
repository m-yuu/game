
const executionBtn = document.getElementById('executionBtn');
const foo = document.getElementById('foo');

executionBtn.addEventListener('click', () => {
	const number = document.getElementById('number');
	const Num = number.value;
	console.log(Num);

	if(judge) {
		foo.innerHTML = 'は素数です';
	} else {
		foo.innerHTML = 'は素数ではありません';
	}
	
});



const judge = (number) => {
	for(let i = 2; i < number; i++) {
		if(number % i === 0) {
			// console.log(false);
			return false;
		} else {
			// console.log(trure);
			return true;
		}
	}
}


// Judge();

// let number = document.getElementById('number');

// console.log();

// function Judge () {
// 	// console.log('test');
// 	for(let i = 0; i < number; i++) {

// 	}

// }