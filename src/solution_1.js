//Multiples of 3 and 5
var sum = 0;
for (var i = 0; i<1000; i++) {
	sum += !(i % 3 && i % 5) ? i : 0;
}
console.log(sum);


