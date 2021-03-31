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
// 1.
function compareNumbers(number1, number2) { // 매개변수 숫자타입 2개 선언.
    //조건1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 할당되지 않은 경우,
    if(typeof number2 === 'undefined') {
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
    }
    //조건2 : 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우,
    else if (number1 >= number2) {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
    }
    else {  //조건2-1 : 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 작은 경우,
        console.log( "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
    }    
}
compareNumbers(10); // 두번째 매개변수의 값을 찾을 수 없습니다.
compareNumbers(30, 10); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
compareNumbers(5, 10); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.



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
function getTotal(int1 , string1) {
    // 조건 1-1 : 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "add" 인 경우,
    if (string1 === "add") {
        var sum = 0;  // int1의 모든 값을 더한 값을 담을 변수(그릇) 생성.
        for (i = 1; i <= int1; i++) {  
            sum += i;
        }
        return sum; // 더한 결과값을 반환합니다.
    }
    //조건 1-2 : 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "multiply" 인 경우,
    else if (string1 === "multiply") {
        var mul = 1; // 1~int1까지 곱한값을 가질 변수(그릇) 생성. **곱하기라서 0이 아닌 1로 설정해둡니다. 
        for (i=1; i <= int1; i++) {
            mul *= i; //(mul = mul*1)
        }
        return mul; // 곱한 결과값을 반환합니다.
    }
    else{  // 조건 1-3 : 함수가 호출될 때, 모든 조건(1-1, 1-2)이 아닌 경우,
        return 0;
    }
}
var answer; // 5. 새로운 변수를 생성(선언).
answer = getTotal(5,"add");  //1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
console.log(answer);  // 15.

answer = getTotal(10, "add"); //를 호출하여 반환하고 변수를 출력한 결과값 : 55
console.log(answer);  // 55.

answer = getTotal(5, "multiply"); //를 호출하여 반환하고 변수를 출력한 결과값 : 120
console.log(answer);  // 120.

answer = getTotal(10, "multiply"); //를 호출하여 반환하고 변수를 출력한 결과값 : 3628800
console.log(answer);  // 3628800.

answer = getTotal(100); //를 호출하여 반환하고 변수를 출력한 결과값 : 0
console.log(answer);  // 0.



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
//console.log(_cars);

// 배열의 순서를 거꾸로 뒤집는다(reverse 사용).
_cars.reverse();
console.log(_cars);  // Benz, Volvo, Audi, Tesla.



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
// **4번,5번 문제가 가장 어려웠습니다.. 자세하게 설명해주시면 좀더 공부해보겠습니다!
function searchIndex (arr, num4) {
    //지정할려는 배열의 원소와 두번째 매개변수의 숫자가 일치하는 것을 만날 수 있도록 0부터 배열의 길이 숫자를 전부 포함시켜 놓습니다.
    for (i = 0; i < arr.length; i++) {
        // 배열의 i번째 원소와 매개변수 num4와 같다면(조건문)
        if (arr[i] === num4) {  
            console.log(i);
        }
        }
    }

searchIndex([8, 10, 13, 30, 50], 30); // 3. 30이 배열의 3번째 수. 



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
// **문제자체를 이해하는 것에 시간이 오래 걸렸습니다.. 이해를 하면 괜찮은데, 분명 한국말인데도 처음 문제를 보고 문장을 이해하는게 어렵네요..ㅠㅠ
var newarr = [];  //데이터 타입을 원소로 가지는 새로운 배열을 생성.
function checkType (arr2) {
    for (i = 0; i < arr2.length; i++) {  // arr2 배열의 수만큼 반복해본다.
        // splice: 배열수정. splice(시작지점, 삭제할 원소의 개수, 추가할 원소);
        newarr.splice(i, 0, typeof arr2[i]);
    }
    console.log(newarr); // 새로운 newarr 배열에 수정합니다. (arr2의 i위치에 arr[i] 데이터타입 값을 추가.)
}
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]])
// 출력값 ["number", "string", "string", "object", "object"]
// **콘솔창 결과값에 대한 이해,해석을 좀더 해봐야 할 것 같습니다.



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

function getMaxValue(arr3) {
    var onlynumber = []; //숫자타입만 골라 넣어줄 새로운 배열 생성.
    var max = arr3[0];
    var result;
    for(i = 0; i < arr3.length; i++) {
        if(typeof arr3[i] === "number") // 우선 데이터 타입이 number인 원소만 구분.
        {
            for (i=0; i < arr3_length; i++) {
                if(max < arr3[i]) {
                    max = arr3[i];
                    result = i;
                }
            }
        }
    }
    return max; 
}
getMaxValue([10, -4, 7, 100, "hello", -50])  //3
getMaxValue([-400, "world", 60, 0, {}, 1000]) //5
console.log(max);

