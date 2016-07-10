//Even Fibonacci numbers
function* fibonacci(){
  var fn1 = 1;
  var fn2 = 2;
  while (true){  
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset){
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var stream = fibonacci();
var sum = 0;
while ((next = stream.next().value) < 4000000) {
	sum += (next % 2) ? 0 : next;
}
console.log(sum);