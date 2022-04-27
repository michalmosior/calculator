const display = document.querySelector('.display');
const previous = document.querySelector('.previous');
const nums = document.querySelectorAll('.num');
const operands = document.querySelectorAll('.operand');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelector('.reset');
const deleteBtn = document.querySelector('.del');
const pointBtn = document.querySelector('.point');

nums.forEach((i) => {
	i.addEventListener('click', function () {
		display.innerHTML += i.value;
	});
});

const operand = function () {
	display.innerHTML += this.value;
	if (
		display.innerHTML.startsWith('+') ||
		display.innerHTML.startsWith('/') ||
		display.innerHTML.startsWith('*')
	) {
		display.innerHTML = '';
	}
	previous.innerHTML = display.innerHTML;
	display.innerHTML = '';
};

const equal = function () {
	const numberOne = parseFloat(previous.innerHTML);
	const numberTwo = parseFloat(display.innerHTML);
	let num;
	if (previous.innerHTML.endsWith('+')) {
		num = (numberOne * 10 + numberTwo * 10) / 10;
		display.innerHTML = num;
	} else if (previous.innerHTML.endsWith('-')) {
		display.innerHTML = numberOne - numberTwo;
	} else if (previous.innerHTML.endsWith('/')) {
		display.innerHTML = numberOne / numberTwo;
		if (numberTwo === 0) {
			display.innerHTML = 'Err';
		}
	} else if (previous.innerHTML.endsWith('*')) {
		display.innerHTML = numberOne * numberTwo;
	}

	previous.innerHTML = '';
};

const addPoint = () => {
	display.innerHTML += '.';
};

const clear = () => {
	display.innerHTML = '';
	previous.innerHTML = '';
};

const deleteLast = () => {
	display.innerHTML = display.innerHTML.slice(0, -1);
};

operands.forEach((op) => {
	op.addEventListener('click', operand);
});

equalBtn.addEventListener('click', equal);
resetBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteLast);
pointBtn.addEventListener('click', addPoint);
