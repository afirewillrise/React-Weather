function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    }
    else {
      reject("Two inputs are not numbers!");
    }
  });
}

addPromise(4).then(function(sum) {
  console.log("Promise Success", sum);
}, function(err) {
  console.log("Promise Failure", err);
});

addPromise(2,3).then(function(sum) {
  console.log("Promise Success", sum);
}, function(err) {
  console.log("Promise Failure", err);
});
