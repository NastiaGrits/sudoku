var arr = [
    1,
    2,
    3,
    18,
    function (c) {
        console.log(c);
    },
    null,
    {name: 'sasha'},
    [1,2,3]
];

var i = 0;

function isFunction(variable) {
    var a = {};
    return variable && a.toString.call(variable) === "[object Function]";
}

//цикл который  выводит элемениы массива , которые не функция
while (i < arr.length){
    if (!isFunction(arr[i])){
        console.log(arr[i]);
    }
    ++i;
}




// var i =arr.length-1;

// while (i >= 0){
//     --i;
// }

