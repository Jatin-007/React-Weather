function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        resolve (a+b);
        reject('Both of parameters should be numbers');
    });
}

addPromise (4,7).then(function (result){
    console.log('Success', result);
}, function (err){
    console.log('promise Error', err);
});