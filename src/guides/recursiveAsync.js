const getAsyncRandomNumber = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.floor((Math.random() * 100) + 1);
    if(random <= 80) {
      resolve({ result: random, continue: true });  
    }
    
    resolve({ result: random, continue: false });
  }, 500); 
  
});

const recursiveGetAsyncRandomNumber = (acc) => new Promise((resolve, reject) => {
  let results = (acc) ? acc : [];
  getAsyncRandomNumber().then(result => {
    results.push(result.result);
    if (result.continue) {
      return recursiveGetAsyncRandomNumber(results).then((final) => {
        resolve(final);
      });
    }
    resolve(results);
  });
});

recursiveGetAsyncRandomNumber().then(result => {
  console.log('==================');
  console.log(result);
  console.log('==================');
});
