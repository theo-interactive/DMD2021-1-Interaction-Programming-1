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

function compareNumbers(n1, n2)
{
  if(typeof n2 === 'undefined'){
      console.log('두번째 매개변수의 값을 찾을 수 없습니다.');
  }
  if(n1 >= n2){
      console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
  }
  else{
      console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
  }
}
// compareNumbers(10);
// compareNumbers(20, 10);
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
var sum1 = 0;
var sum2 = 1; // 초기화를 0으로 하니까 곱할 때 자꾸 0으로 된다.

function getTotal(n, s){

    // var num = n + s;

    // return num;
/*
    if(s === 'add'){
        for(var i = 0; i< n; i++){
            sum1 += (i+1);
        }
        return sum1; // 반복문을 다 돌고 반환해줘야 다 더해진 값을 반환한다.
    }
    else if(s === 'multiply'){
        for(var i = 1; i< n+1; i++){ // 초기화를 0으로 하니까 곱할 때 자꾸 0으로 된다. // n값에 1을 더해줘야 마지막 값까지 더해진다.
            sum2 *= i;
        }
        return sum2;
    }
    else{
        return 0;
    }
    */

}
/*
getTotal(5, "add");
console.log("조건 1-1 = " + sum1);

getTotal(5, "multiply");
console.log("조건 1-2 = " + sum2);

var a = getTotal(11, "minus");
console.log("조건 1-3 = " + a);
*/

//var e = getTotal(8, "cording");
//console.log(e);

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
var result = '';

for(var i=0; i<_cars.length; i++){

    result += _cars[i];
    // result += ',';
    // if(i !== 0){
    //     result += ',';
    // }
    if (i !== _cars.length - 1) {
        result += ',';
    }
    else{
        result += '.';
    }
    // if (i === _cars.length - 1) {
    //     result += '.';
    // }
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
function searchIndex(_arr, num) {
    for (var i = 0; i < _arr.length; i++) {
        if (_arr[i] === num) {
            return i;
        }
    }
}
var idx = searchIndex([8, 10, 13, 30, 50], 30);
console.log(idx);

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
/*
var type = [];
function checkType(_array){
    type.length = _array.length;
    for(var i =0; i<_array.length; i++){
        // console.log(typeof _array[i]);
        type[i] = (typeof _array[i]);
        console.log(type[i]);
    }
    
}*/
/*
var type = [];
var arrResult = '';
function checkType(_array){

    for(var i =0; i<_array.length; i++){
        type[i] = (typeof _array[i]);
        // console.log(type[i]);
        if(arrResult !== (type.length - 1))
        {
            arrResult += ',';
        }
        arrResult += type[i] 
        
    }
    
}
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]);
// var arrayResult = checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]);
console.log(arrResult);
*/

var type = [];

function checkType(_array){
    type.length = _array.length;
    for(var i =0; i<_array.length; i++){
        type[i] = (typeof _array[i]);
    }
    console.log(type);
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
function getMaxValue(_ary){
    var max = _ary[0];
    var idx = 0;
    for(var i=0; i<_ary.length; i++){
        if(max < _ary[i]){
            max = _ary[i];
            idx = i;
        }
    }
    return idx;
}
// var max = getMaxValue([10, -4, 7, 100, "hello", -50]);
var max = getMaxValue([-400, "world", 60, 0, {}, 1000]);
console.log(max);
