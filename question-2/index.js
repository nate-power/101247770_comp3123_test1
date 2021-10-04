// Nathan Power - 101247770
// GitHub Repo - https://github.com/nate-power/101247770_comp3123_test1

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