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
// 함수 compareNumbers 를 선언하고 매개변수를 지정한다.
function compareNumbers(numA, numB) {
    // 조건 1.
    // numB 의 전달인자 값이 할당되지 않은 경우.
    if (typeof numB === 'undefined') {
        console.log('두 번째 매개변수의 값을 찾을 수 없습니다.');
    } else { // numB 의 전달인자 값이 할당된 경우.
        // 조건 2.
        // numA 의 전달인자 값이 numB 의 전달인자 값보다 크거나 같은 경우.
        if (numA >= numB) {
            console.log('첫 번째 매개변수에 할당된 전달인자의 값이 두 번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.');
        } else { // numA 의 전달인자 값이 numB 의 전달인자 값보다 작은 경우.
            console.log('첫 번째 매개변수에 할당된 전달인자의 값이 두 번째 매개변수에 할당된 전달인자의 값보다 작습니다.');
        }    
    }
}
// compareNumbers 함수에 매개변수를 지정 후 호출한다.
compareNumbers(10); // -> 두 번째 매개변수의 값을 찾을 수 없습니다.
compareNumbers(20, 10); // -> 첫 번째 매개변수에 할당된 전달인자의 값이 두 번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
compareNumbers(10, 20); // -> 첫 번째 매개변수에 할당된 전달인자의 값이 두 번째 매개변수에 할당된 전달인자의 값보다 작습니다.





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
// 함수 getTotal 을 선언하고 매개변수를 지정한다.
function getTotal(num2, string2) {
    // 조건 1-1.
    // 문자 타입 매개변수의 전달인자 값이 "add" 와 같을 경우.
    if (string2 === "add") {
        // 결과값을 저장할 변수 addResult 를 선언하고 초기값을 0 으로 할당한다.
        var addResult = 0;
        // 1 부터 숫자 타입 매개변수의 전달인자 값까지 더한 값을 addResult 변수에 저장한다.
        for (i = 1; i <= num2; i++) {
            addResult += i;
        }
        // 덧셈 연산의 결과값을 반환한다.
        return addResult;
    }
    // 조건 1-2.
    // 문자 타입 매개변수의 전달인자 값이 "multiply" 와 같을 경우.
    if (string2 === "multiply") {
        // 결과값을 저장할 변수 multiplyResult 를 선언한다. 곱셈 연산이므로 초기값을 1 로 할당한다.
        var multiplyResult = 1;
        // 1 부터 숫자 타입 매개변수의 전달인자 값까지 곱한 값을 multiplyResult 변수에 저장한다.
        for (i = 1; i <= num2; i++) {
            multiplyResult *= i;
        }
        // 곱셈 연산의 결과값을 반환한다.
        return multiplyResult;
    }
    // 조건 1-3.
    // 1-1 도 아니고 1-2 도 아닐 경우.
    if ((string2 !== "add") && (string2 !== "multiply")) {
        // 0 을 반환한다.
        return 0;
    }
}
// 변수 totalResult 를 선언한다.
var totalResult;
// 매개변수에 전달인자 지정 후 함수를 호출한다.
totalResult = getTotal(5, "add");
// 값을 출력한다.
console.log(totalResult); // -> 15

totalResult = getTotal(10, "add");
console.log(totalResult); // -> 55

totalResult = getTotal(5, "multiply");
console.log(totalResult); // -> 120

totalResult = getTotal(10, "multiply");
console.log(totalResult); // -> 3628800

totalResult = getTotal(100);
console.log(totalResult); // -> 0





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
// 배열 _cars 를 선언 후 값을 할당한다.
var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
// 배열의 순서를 거꾸로 뒤집는다.
_cars.reverse();
// _cars 를 출력한다.
console.log(_cars); // -> 'Benz', 'Volvo', 'Audi', 'Tesla'





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
// 함수 searchIndex 를 선언하고 매개변수를 지정한다.
function searchIndex(arr4, num4) {
    // 배열의 원소와 숫자가 일치할 경우, 해당 원소의 인덱스 값을 출력한다.
    for (i = 0; i < arr4.length; i++) {
        if (arr4[i] === num4) {
            console.log(i);
        }
    }
}
// searchIndex 함수에 매개변수를 지정 후 호출한다.
searchIndex([8, 10, 13, 30, 50], 30); // -> 3





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
// 배열 _newArr5 를 선언한다.
var _newArr5 = [];
// 함수 checkType 을 선언하고 매개변수를 지정한다.
function checkType(arr5) {
    // 새로운 배열 _newArr5 에 매개변수 배열의 원소의 데이터 타입을 저장한다.
    for (i = 0; i < arr5.length; i++) {
        // _newArr5.push(typeof arr5[i]);
        _newArr5.splice(i, 0, typeof arr5[i]);
    }
    // _newArr5 를 출력한다.
    console.log(_newArr5);
}
// checkType 함수에 매개변수를 지정 후 호출한다.
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]); // -> ['number', 'string', 'string', 'object', 'object']





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
function getMaxValue(arr6) {
    // 최댓값을 저장할 변수 max 의 초기값에 대한 고민.
    // var max = arr6[0]; // 문제점: 첫 번째 원소에 string type 의 최댓값(예: "5000")이 있을 경우.
    // var max = 0; // 문제점: 배열의 원소들이 모두 0보다 작을 경우.
    // var max = 임의로 -99999 라고 해야 하나?
    // ...
    // -> 숫자만으로 이루어진 새로운 배열을 만들어 초기값을 설정하기로 한다.
    var arrNum = [];
    for (i = 0; i < arr6.length; i++) {
        if (typeof arr6[i] === 'number') {
            arrNum.push(arr6[i]);
            var max = arrNum[0];
            // console.log('max 초기값: ' + max); // arrNum 이 전역변수일 경우 호출한 함수의 초기값이 둘 다 10 으로 출력되는 오류가 발생. -> 지역변수로 변경 후 해결.
        }
        // 현재 원소의 값이 기존 저장된 최댓값보다 클 때 max 에 현재 원소 값을 할당한다.
        if (arr6[i] > max) {
            max = arr6[i];
            // console.log('max 현재값: ' + max); // 두 번째로 호출한 getMaxValue([-400, "world", 60, 0, {}, 1000]) 의 max 현재값이 60, 0, 1000 으로 출력되는 오류가 발생. -> 0 이 아닌 다른 수들을 입력해서 테스트해보니 조건절이 max 초기값을 기준으로 판단하는 것을 확인. -> 근데 어떻게 고쳐야 할지 모르겠다!
            var maxIndex = i;
        }
    }
    return maxIndex;
}

// 변수 resultMaxValue 를 선언한다.
var resultMaxValue;
// getMaxValue 함수에 매개변수를 지정하여 호출하고 값을 반환받는다.
resultMaxValue = getMaxValue([10, -4, 7, 100, "hello", -50]);
// 값을 출력한다.
console.log(resultMaxValue); // -> 3

resultMaxValue = getMaxValue([-400, "world", 60, 0, {}, 1000]);
console.log(resultMaxValue); // -> 5

