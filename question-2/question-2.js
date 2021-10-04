const resolvedPromise = () =>{
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (1 + 1 == 2) {
                resolve({'message': 'delayed success!'});
            }
            else {
                reject({'message': 'delayed exception'});
            }
        }, 500)
     });
};

const rejectedPromise = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (1 + 1 == 3) {
                resolve({'message': 'delayed success!'});
            }
            else {
                reject({'message': 'delayed exception'});
            }
        }, 500)
    });
};
resolvedPromise().then(
    success => console.log(success),
    error => console.log(error)
);
rejectedPromise().then(
    success => console.log(success),
    error => console.log(error)
);