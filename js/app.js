const btn = document.getElementById('btn');
const splitBtn = document.getElementById('splitBtn');
const total = document.getElementById('total');
const tax = document.getElementById('tax');
const tip = document.getElementById('tip');
const people = document.getElementById('people');
const perPerson = document.getElementById('perPerson');
const result = document.getElementById('result');
const resultTip = document.getElementById('resultTip');

btn.addEventListener('click', () => {
	console.log('btn is clicked')
	const totalValue = total.value;
	const totalInt = parseInt(totalValue);
	const taxValue = tax.value;
	let taxDecimal = taxValue * 0.01;
	console.log(taxDecimal) 
	const tipValue = tip.value;
	let tipDecimal = tipValue * 0.01;
	const peopleValue = people.value;
	const peopleInt = parseInt(peopleValue) 
	let resultPrice;

	calculation = () => {
		resultPrice = totalInt + (totalInt * taxDecimal) + (totalInt * tipDecimal);
		console.log(resultPrice, 'result before floor');
		resultPrice = Math.floor(resultPrice * 100) / 100;
		console.log(resultPrice, 'result AFTER floor');
		result.innerHTML =  `$${resultPrice}`;
		// to show tax price only
		let totalTimesTip = totalInt * tipDecimal;
		console.log(totalTimesTip, 'totalTimesTip before floor')
		// two places of decimal
		totalTimesTip = Math.floor(totalTimesTip * 100) / 100;
		console.log(totalTimesTip, 'totalTimesTip AFTER floor')
		resultTip.innerHTML = `$${totalTimesTip}`;
		// split
		let splitedPrice = resultPrice / peopleInt;
		console.log(splitedPrice, 'Before floor - 1');
		splitedPrice = Math.floor(splitedPrice * 100) / 100;
		console.log(splitedPrice, 'AFTER floor - 1')
		perPerson.innerHTML = `$${splitedPrice} / person`;
	}
	calculation()
})









