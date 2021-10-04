// Nathan Power - 101247770
// GitHub Repo - https://github.com/nate-power/101247770_comp3123_test1

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
let lowerCaseWords = (mixedArray) => {
    // functionality to get all strings from the mixed array
    let newArray = [];
        for (let element of mixedArray) {
            if (typeof element === 'string' || element instanceof String) {
                newArray.push(element.toLowerCase());
            }
        }
    
    // promise will be returned ensuring there was strings found in the array, if not, then array is not logged to the console
    return new Promise(function (resolve, reject) {
        if (newArray.length > 0) {
            resolve(newArray);
        }
        else {
            reject("Array is empty; there were no strings in the array.");
        }
    })
};

lowerCaseWords(mixedArray).then(
    success => console.log(success),
    error => console.log(error)
);