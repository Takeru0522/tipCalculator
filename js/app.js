


const btn = document.getElementById('btn');
const splitBtn = document.getElementById('splitBtn');

const total = document.getElementById('total');

const tax = document.getElementById('tax');

const tip = document.getElementById('tip');

const people = document.getElementById('people');

const perPerson = document.getElementById('perPerson');


const result = document.getElementById('result');
const resultTip = document.getElementById('resultTip');
// caliculation implemet here
btn.addEventListener('click', () => {
	console.log('btn is clicked')
	const totalValue = total.value;
	const totalInt = parseInt(totalValue); //

	const taxValue = tax.value;
	let taxDecimal = taxValue * 0.01; //
	console.log(taxDecimal) 

	const tipValue = tip.value;
	let tipDecimal = tipValue * 0.01; //

	const peopleValue = people.value;
	const peopleInt = parseInt(peopleValue) //

	//
	let resultPrice;
	// console.log(totalInt, '001');
	// console.log(taxDecimal);
	// console.log(tipDecimal);	
	// console.log(peopleInt, '001- int')

	caliculation = () => {
		resultPrice = totalInt + (totalInt * taxDecimal) + (totalInt * tipDecimal);
		console.log(resultPrice, 'result before floor');
		resultPrice = Math.floor(resultPrice * 100) / 100;
		console.log(resultPrice, 'result AFTER floor');

		result.innerHTML =  `Total Price : ${resultPrice}`;
		// to show tax price only
		let totalTimesTip = totalInt * tipDecimal;
		console.log(totalTimesTip, 'totalTimesTip before floor')
		// two places of decimal
		totalTimesTip = Math.floor(totalTimesTip * 100) / 100;
		
		console.log(totalTimesTip, 'totalTimesTip AFTER floor')
		resultTip.innerHTML = `Tip : ${totalTimesTip}`;

		// split
		let splitedPrice = resultPrice / peopleInt;
		console.log(splitedPrice, 'Before floor - 1');
		splitedPrice = Math.floor(splitedPrice * 100) / 100;
		console.log(splitedPrice, 'AFTER floor - 1')
		perPerson.innerHTML = `${splitedPrice} / person`;

	}
	caliculation()



})






// const test = document.getElementById('inputTest')


// const testBtn = document.getElementById('testBtn')

// testBtn.addEventListener('click', () => {
	

// const totalValue = total.value;

// const taxValue = tax.value;

// const tipValue = tip.value;

// const peopleValue = people.value;

// 	console.log(total.value, 'total')
// 	console.log(tax.value, 'tax')
// 	console.log(tip.value, 'tip')
// 	console.log(people.value, 'people')
// 	console.log('================================');
// 	console.log(totalValue);
// 	console.log(taxValue);
// 	console.log(tipValue);
// 	console.log(peopleValue, ' = peopleValue')
// })





// const a = 5
// cal = (a) => {
// 	a *= 10;
// 	return a
// }
// console.log(a, 'a')
// console.log(cal(a))











