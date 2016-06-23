function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('arguments must be numbers');
  }
  return x + y;
}

try {
  var sum1 = add(2, 3);
  console.log('the answer is: ' + sum1);
  var sum2 = add('1', '2');
  console.log('the answer is: ' + sum2);
} catch (e) {
  console.log('caught: ' + e.message);
}
