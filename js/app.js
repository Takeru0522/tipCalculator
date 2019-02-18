
const tipCalcurator = (price, tax, tipRate) => {
	let total = price + (price * tax * 0.01) + (price * tipRate * 0.01);
	console.log(total);
}

tipCalcurator(21, 8.5, 15);
tipCalcurator(122, 8, 15);




