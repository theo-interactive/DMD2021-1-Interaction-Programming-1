/*
문제 풀이.
*/

/*
Quest 1.
1. compareNumbers 라는 함수를 선언하고, 2개의 매개변수(숫자 타입)를 지정합니다.
2. 조건1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 할당되지 않은 경우, 아래와 같은 문자열로 console 에 출력되도록 작성합니다.
----------
두번째 매개변수의 값을 찾을 수 없습니다.
----------
3. 값이 할당된 경우 4(순서)에 이어서 작성합니다.
4. 조건2 : 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우, 아래와 같은 문자열로 console 에 출력되도록 작성합니다.
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
----------
5. 작은 경우 아래와 같은 문자열로 console 에 출력되도록 작성합니다.
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.
----------
6.  1(순서) 함수에 각 매개변수를 지정하여 호출합니다.
 
----------
함수 호출)

compareNumbers(10) 을 호출한 경우 : "두번째 매개변수의 값을 찾을 수 없습니다."

compareNumbers(20, 10) 을 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."

compareNumbers(10, 20) 을 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."
----------
*/
// Answer 1.
function compareNumbers(number1, number2) {
    // if (number2 === undefined) {
    //     console.log('두번째 매개변수의 값을 찾을 수 없습니다.');
    // }
    if (typeof number2 === 'undefined') {
        console.log('두번째 매개변수의 값을 찾을 수 없습니다.');
    } else {
        // 
    }
    if (number1 !== undefined && number2 !== undefined) {
        if (number1 >= number2) {
            console.log('첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.');
        } else {
            console.log('첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.');
        }
    }
}
// compareNumbers(); // number1, number2 둘 다 값이 없음.
// compareNumbers(1); // number2 의 값이 없음
compareNumbers(10);
compareNumbers(20, 10);
compareNumbers(10, 20);


/*
Quest 2.
1. getTotal 이라는 함수를 선언하고, 2개의 매개변수(첫번째는 숫자 타입, 두번째는 문자 타입)를 지정합니다.
2. 조건 1-1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "add" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 덧셈 연산하여 결과값을 반환합니다.
3. 조건 1-2 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "multiply" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 곱셈 연산하여 결과값을 반환합니다.
4. 조건 1-3 : 1(순서) 함수가 호출될 때, 모든 조건(1-1, 1-2)이 아닌 경우, 결과값 숫자 0 을 반환합니다.
5. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
6. 5(순서) 변수의 값을 console 에 출력합니다.

----------
함수 호출 예시)

getTotal(5, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 15

getTotal(10, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 55

getTotal(5, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 120

getTotal(10, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 3628800

getTotal(100) 를 호출하여 반환하고 변수를 출력한 결과값 : 0
----------
*/
// Answer 2.
function getTotal(max, type) {
    var result, i;
    if (type === 'add') {
        result = 0;
        for (i = 1; i <= max; i++) {
            result += i;
        }
    } else if (type === 'multiply') {
        // 0 * 100 = 0;
        // result = 0;
        for (i = 1; i <= max; i++) {
            if (i === 1) {
                result = i;
            } else {
                result *= i;
            }
        }
    } else {
        result = 0;
    }
    return result;

    switch (type) {
        case 'add' :
            // type 이 'add' 일 때.
            break;
        case 'multiply' :
            // type 이 'multiply' 일 때.
            break;
        default : 
            // 모든 조건이 성립하지 않을 때.
            break;
    }
}
var total = getTotal(5, "add");
console.log(total);
total = getTotal(10, "add");
console.log(total);
total = getTotal(5, "multiply");
console.log(total);
total = getTotal(10, "multiply");
console.log(total);
total = getTotal(100);
console.log(total);



/*
Quest 3.
1. var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
2. _cars 배열의 문자열 원소를 아래 결과와 같은 문자열로 console 에 출력되도록 작성합니다.

----------
문자열 출력)

Benz, Volvo, Audi, Tesla.
----------
*/
// Answer 3.
var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
var result = '', i;
// i = 0;
// while (i < _cars.length) {
//     // i 가 계속해서 같은 값인 상태.
//     i++;
// }
for (i = 0; i < _cars.length; i++) {
    // if (i > 0) {
    //     result += ', ';
    // }
    result += _cars[i];
    if (i < _cars.length - 1) {
        result += ', ';
    } else {
        result += '.';
    }
}
console.log(result);
result = '';
// for ... in
for (var index in _cars) {
    // console.log(index); // type - string.
    // Number(index) -> number 타입으로 변경
    // parseInt(index) -> 진법으로 정수값 변경.
    // parseInt("0", 10); -> 10진수 값으로 number 타입 변경.
    if (parseInt(index) > 0) {
        result += ', ';
    }
    // console.log(_cars[index]);
    result += _cars[index];
    if (parseInt(index) === _cars.length - 1) {
        result += '.';
    }
}
console.log(result);


/*
Quest 4.
1. searchIndex 라는 함수를 선언하고, 2개의 매개변수(첫번째는 배열, 두번째는 숫자) 를 지정합니다.
2. 1(순서) 함수에 전달된 첫번째 매개변수 배열의 원소들과 두번째 매개변수의 숫자를 비교하여(반복문, 조건문 사용), 일치할 경우 배열의 index(원소 순서) 를 console 에 출력하도록 작성합니다.
3. 1(순서) 함수에 각 매개변수를 지정하여 호출합니다.

----------
함수호출 예시)

searchIndex([8, 10, 13, 30, 50], 30) 를 호출한 경우 : 3
----------
*/
// Answer 4.
function searchIndex(_array, number) {
    var order;
    for (var index in _array) {
        if (_array[index] === number) {
            // console.log('일치', index, _array[index]);
            order = parseInt(index);
        }
        // console.log(_array[index]);
    }
    console.log(order);
    
    order;
    // array map() - 배열 반복.
    _array.map(function(value, index) {
        // console.log(value, index);
        if (value === number) {
            order = index;
        }
    });
    console.log(order);
}
searchIndex([8, 10, 13, 30, 50], 30);



/*
Quest 5.
1. checkType 이라는 함수를 선언하고, 1개의 매개변수(배열)를 지정합니다.
2. 1(순서) 함수에 전달된 매개변수 배열의 원소들의 데이터 타입을 원소로 가지는 새로운 배열을 생성하여(반복문 사용) console 에 출력합니다.
3. 1(순서) 함수에 매개변수를 지정하여 호출합니다.

----------
함수호출 예시)

checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]) 를 호출한 경우
: ['number', 'string', 'string', 'object', 'object']
----------
*/
// Answer 5.
function checkType(_array) {
    var types = [];
    // types = new Array();
    for (var index in _array) {
        // console.log(_array[index]);
        // typeof _array[index]; // -> type
        types.push(typeof _array[index]);
    }
    console.log(types);

    // _array.map(function(value) {
        // types.push(typeof value);
    // });
    // console.log(types);

    types = _array.map(function(value) { return typeof value });
    console.log(types);

    // array filter() 배열 필터링.
    types = _array.filter(function(value) {
        return typeof value === 'string';
        // return typeof value === 'number';
        // return typeof value === 'object';
    });
    console.log(types);

}
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]);


/*
Quest 6.
1. getMaxValue 이라는 함수를 선언하고, 1개의 매개변수(배열 타입)를 지정합니다.
2. 1(순서) 함수에 전달된 매개변수 배열 원소들의 숫자 값들을 비교하여 숫자가 가장 큰 경우, 1(순서) 배열에서 해당된 순서를 결과값으로 반환합니다.
3. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
4. 3(순서) 변수의 값을 console 에 출력합니다.
* 매개변수 배열에는 숫자 이외의 타입도 할당되어 있습니다.

----------
함수 호출 예시)

getMaxValue([10, -4, 7, 100, "hello", -50]) 를 호출하여 반환하고 변수를 출력한 결과값 : 3

getMaxValue([-400, "world", 60, 0, {}, 1000]) 를 호출하여 반환하고 변수를 출력한 결과값 : 5
----------
*/
// Answer 6.
function getMaxValue(_array) {
    var order, max;
    // 반복문으로 적용. for
    for (var i = 0; i < _array.length; i++) {
        if (typeof _array[i] === 'number') {
            if (max === undefined) {
                max = _array[i];
                order = i;
            } else {
                if (max <= _array[i]) {
                    max = _array[i];
                    order = i;
                }
            }
        }
    }
    console.log(max, order);
    // 배열(객체) 반복으로 적용. for ... in
    order; // undefined.
    max;
    for (var index in _array) {
        if (typeof _array[index] === 'number') {
            if (max === undefined) {
                max = _array[index]; // 다음 원소값과의 비교를 위한 초기 값 적용.
                order = parseInt(index);
            } else {
                if (max <= _array[index]) {
                    max = _array[index];
                    order = parseInt(index);
                }
            }
        }
    }
    console.log(max, order);
    // array map() 배열 반복으로 적용.
    order; // undefined.
    max;
    _array.map((value, index) => {
        if (typeof value === 'number') {
            if (max === undefined) {
                max = value;
                order = index;
            } else {
                if (max <= value) {
                    max = value;
                    order = index;
                }
            }
        }
    });
    console.log(max, order);
    // ES6 화살표 함수.
    // (param1) => {
    // }
    // === 
    // _array.map(function() {});
    // ES5 명시적 함수.
    // function(param1) {
    // }
    return order;
}
var max = getMaxValue([10, -4, 7, 100, "hello", -50]);
console.log(max);
max = getMaxValue([-400, "world", 60, 0, {}, 1000]);
console.log(max);