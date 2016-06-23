function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      console.log(new Error('arguments must be numbers'));
      return;
    }
    callback(null, x + y);
  }, 1000);
}

try {

  asyncAdd(2, 3, function(err, sum) {
    if (err) {
      console.log('caught error: ' + err.message);
      return;
    }
    console.log('the answer is: ' + sum);
  });

  asyncAdd('a', 'b', function(err, sum) {
    if (err) {
      console.log('caught error: ' + err.message);
      return;
    }
    console.log('the answer is: ' + sum);
  });

} catch (err) {
  console.log('caught error: ' + err.message);
}
