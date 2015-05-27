var getPrimes = function(max) {
  var numbers = [];

  // Populate numbers with all numbers
  for(var h = 2; h <= max; h++) {
    numbers.push(h);
  }

  debugger;
  numbers.forEach(function(number) {
    console.log("Looking at number" + number)
    for(var i = 2; i < number; i++) {
      console.log("Looking at subnumber " + i);
      if (number % i === 0) {
      console.log("Our number is divisible by" +i);
        numbers.forEach(function(val) {
          if (val % number === 0) {
            numbers.splice(numbers.indexOf(val), 1);
          }
        })
      }
    }
    console.log("----------------")
  });

  return numbers;
};
