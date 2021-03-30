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

// 어렵지만 열심히 해보겠습니다 교수님!

// 일단 함수를 선언하겠습니다.
function compareNumbers(num1, num2) {
    if (typeof num2 == "undefined"){ // 두번째 매개변수의 전달인자 값이 할당되지 않은 경우
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.")
    }
    else if (num1 >= num2) { // 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.")
    }
    else { // 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 작은 경우
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.")
    }
}
compareNumbers(10); // 두번째 매개변수의 값을 찾을 수 없습니다.
compareNumbers(20, 10); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
compareNumbers(10, 20); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.

// 이것으로 Quest 1.을 마쳤습니다!

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

function getTotal (num3, string1) {
    if (string1 === "add") { // 두번째 매개변수의 전달인자 값이 "add" 인 경우
        var sum = 0; // 일단 모든 값을 더해줄 변수 sum을 만들었습니다.
        for (var i = 1; i <= num3; i++){ // 일단 1부터 더해야하기에 i값을 1로 주었고, num3의 값까지 더해주어야 하기에 num3보다 작거나 같으면 더해주도록 했습니다.
            sum += i;
        }
        return sum; // string1에 sum을 return 합니다.
    }
    else if (string1 === "multiply") { // 두번째 매개변수의 전달인자 값이 "multiply" 인 경우
        var mul = 1; // 생각없이 0으로 했다가 모두 0이 떠서 1로 바꾸었습니다...
        for (var i = 1; i <= num3; i++){ // 일단 1부터 곱해야하기에 i값을 1로 주었고, num3의 값까지 곱해주어야 하기에 num3보다 작거나 같으면 곱해주도록 했습니다.
            mul *= i;
        }
        return mul; // string1에 mul을 return 합니다.
    }
    else if (string1 !== "add" && string1 !== "multiply"){ // add도 아니고 multiply도 아닐 경우
        return 0; // string1에 0을 return합니다.
    }
}
var result; // 값을 console할 변수를 먼저 만들어줍니다.
result = getTotal(5, "add");
console.log(result); // 15
// 계속 새로고침을 해봐도 콘솔창에 아무것도 안 떠서 힘들었는데 가장 기본적인 console.log를 안 넣었습니다...
result = getTotal(10, "add");
console.log(result); // 55
result = getTotal(5, "multiply");
console.log(result); // 120
result = getTotal(10, "multiply");
console.log(result); // 3628800
result = getTotal(100);
console.log(result); // 0

// 이것으로 Quest 2.을 마쳤습니다!

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

var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz']; // 일단 그대로 가져와줍니다.
_cars.reverse(); // _cars를 반대로 정렬해줍니다.
console.log(_cars); // ["Benz", "Volvo", "Audi", "Tesla"]

// 이것으로 Quest 3.을 마쳤습니다!

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

function searchIndex (arr1, num4){ // 함수를 선언했고, 2개의 매개변수를 지정하였습니다.
    for (var i = 0; i<=arr1.length; i++){
        // 첫번째 매개변수 배열의 원소들 중, 두번째 매개변수의 숫자와 일치하는지를 확인해야하기 때문에 반복문으로 모든 i의 값을 넣을 수 있게 해주었습니다.
        if (arr1[i] === num4){ // 만약에 i번쨰의 arr1이 num4와 같을 경우
            console.log(i); // i를 출력합니다.
        }
    }
}
searchIndex([8, 10, 13, 30, 50], 8) // 0
searchIndex([8, 10, 13, 30, 50], 10) // 1
searchIndex([8, 10, 13, 30, 50], 13) // 2
searchIndex([8, 10, 13, 30, 50], 30) // 3
searchIndex([8, 10, 13, 30, 50], 50) // 4

// 이것으로 Quest 4.을 마쳤습니다!

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

// function checkType (arr2) {
//     for (var i = 0; i < arr2.length; i++){
//         var array;
//         array += "'" + typeof arr2[i] + "'" ;
//     }
//     return array;
// }
// var arrResult;
// arrResult = checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]])
// console.log(arrResult);

// 이렇게 저렇게 해보았지만 뭔가 아닌 듯해서 처음부터 다시 해보겠습니다...
var array = []; // 함수보다 위에 있어야 안에 넣을 수 있기에 미리 array를 만들어주었습니다.

function checkType (arr2) { // checkType 이라는 함수를 선언하고, 1개의 매개변수(배열)를 지정합니다.
    for (var i = 0; i < arr2.length; i++){ // arr2의 length보다 작을 시,
        array.splice(i, 0, typeof arr2[i]) // i번째에 i번 arr2가 오게 하였습니다.
    }
}
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]])
console.log(array); // ["number", "string", "string", "object", "object"]
// 많이 어려웠고 splice를 사용해야겠다는 생각마저도 나중에 들었습니다... 복습을 다시 열심히 해야할 것 같습니다 ㅜ
// 이것으로 Quest 5.을 마쳤습니다!

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

var max = 0;
var numberOnly = [];
var standard;

function getMaxValue (arr3) { // 일단 getMaxValue 함수를 선언하고 매개변수를 지정해주었습니다.
    for (var i = 0; i < arr3.length; i++){  // 계속해서 i의 값이 arr3의 마지막 순서가 될 때까지 1씩 오르는 반복문을 만들었습니다.
        if (typeof arr3[i] == "number"){ // 일단 숫자 이외의 타입이 있기 때문에, 숫자만 걸러내도록 if절을 만들어줍니다.
            numberOnly.push(arr3[i]) // numberOnly라는 새로운 변수에 arr3의 숫자만 넣어줍니다.
            standard = numberOnly[0] // standard라는 변수를 새로 만들어주고, numberOnly의 첫번째 값을 기준으로 넣어줍니다.
        }
        if (standard <= arr3[i]){ // 만약 standard가 arr3[i]보다 작을 시,
            standard = arr3[i]; //arr3[i]를 standard에 대입합니다.
            max = i; // return하기 위해, max라는 변수를 새로 만들어주었고, 이 곳에는 순서가 들어와야하기에 i를 대입시킵니다.
        }
    } return max; // max를 return 합니다.
}

var result3; // 결과를 보기 위해 result3이라는 변수를 또 만들어줍니다.
result3 = getMaxValue([10, -4, 7, 100, "hello", -50])
console.log(result3); // 3 (100이 제일 크기 때문에)
result3 = getMaxValue([-400, "world", 60, 0, {}, 1000])
console.log(result3); // 5 (1000이 제일 크기 때문에)

// 이것으로 Quest 6.까지 모두 마쳤습니다!