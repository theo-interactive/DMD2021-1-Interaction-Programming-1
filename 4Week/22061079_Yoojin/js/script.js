
/*
문제 풀이.
*/

/*
Quest 1.
1. compareNumbers 라는 함수를 선언하고, 2개의 매개변수(숫자 타입)를 지정합니다. -
2. 조건1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 할당되지 않은 경우, 아래와 같은 문자열로 console 에 출력되도록 작성합니다. -
----------
두번째 매개변수의 값을 찾을 수 없습니다. -
----------
3. 값이 할당된 경우 4(순서)에 이어서 작성합니다. -
4. 조건2 : 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우, 아래와 같은 문자열로 console 에 출력되도록 작성합니다. -
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다. -
----------
5. 작은 경우 아래와 같은 문자열로 console 에 출력되도록 작성합니다. -
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.-
----------
6.  1(순서) 함수에 각 매개변수를 지정하여 호출합니다. -
 
----------
함수 호출)
compareNumbers(10) 을 호출한 경우 : "두번째 매개변수의 값을 찾을 수 없습니다."-
compareNumbers(20, 10) 을 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."-
compareNumbers(10, 20) 을 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."-
----------
*/
// Answer 1.
function compareNumbers(num1, num2) // 함수 compareNumbers를 선언 후 2개의 매개변수 지정
{
    if (typeof num2 === 'undefined') // 두번째 매개변수의 전달인자 값이 할당되지 않은 경우를 지정함
    {
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.") // 해당 문장 출력
    }
    else if (num1 >= num2) // 첫번째 매개변수(n1) 이 >=(크거나 같다) 두번째 매개변수(n2)
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.") // 해당 문장 출력
    }
    else if (num2 > num1) // 첫번째 매개변수(n1) 이 작다(<) 두번째 매개변수(n2)
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.") // 해당 문장 출력
    }
}
compareNumbers(5); // 두번째 매개변수의 값을 찾을 수 없습니다.
compareNumbers(25, 5); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
compareNumbers(7, 8); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.



/*
Quest 2.
1. getTotal 이라는 함수를 선언하고, 2개의 매개변수(첫번째는 숫자 타입, 두번째는 문자 타입)를 지정합니다.-
2. 조건 1-1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "add" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 덧셈 연산하여 결과값을 반환합니다.-
3. 조건 1-2 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "multiply" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 곱셈 연산하여 결과값을 반환합니다. -
4. 조건 1-3 : 1(순서) 함수가 호출될 때, 모든 조건(1-1, 1-2)이 아닌 경우, 결과값 숫자 0 을 반환합니다.-
5. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.-
6. 5(순서) 변수의 값을 console 에 출력합니다.-
----------
함수 호출 예시)
getTotal(5, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 15-
getTotal(10, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 55-
getTotal(5, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 120-
getTotal(10, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 3628800-
getTotal(100) 를 호출하여 반환하고 변수를 출력한 결과값 : 0-
----------
*/
// Answer 2.
function getTotal(num3, string1) // 숫자 타입의 매개변수 / 문자 타입의 매개변수를 지정
{
    if (string1 === "add") // 두번째 매개변수(string1)의 전달인자 값이 "add" 일 경우를 지정
    {
        var sum = 0; // 값을 더할 임의의 변수 지정
        for (var i = 1; i <= num3; i++) // i에 숫자 1 대입; 첫번째 매개변수(num3)의 전달인자 값이 될때까지 이므로 num3보다 작거나 같을때; i가 계속하여 더해짐 
        {
            sum += i; // sum에 i를 덧셈
        }
        return sum; // 계산된 sum을 return
    }
    else if (string1 === "multiply") // 두번째 매개변수(string1)의 전달인자 값이 "multiply" 일 경우를 지정 
    {
        var mul = 1; // 값을 곱할 임의의 변수 지정(0일 경우 n*0=0 이므로 최소값 1)
        for (var i = 1; i <= num3; i++)
        {
            mul *= i; // mul에 i를 곱셈
        }
        return mul; // 계산된 mul을 return
    }
    else
    {
        return 0; // 위 조건을 모두 충족하지 못할 경우 0을 반환
    }

}

var result;

result = getTotal(3, "add");
console.log(result); // 6

result = getTotal(6, "add");
console.log(result); // 21

result = getTotal(3, "multiply");
console.log(result); // 6

result = getTotal(8, "multiply");
console.log(result); // 40320

result = getTotal(1);
console.log(result); // 0

/*
Quest 3.
1. var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
2. _cars 배열의 문자열 원소를 아래 결과와 같은 문자열로 console 에 출력되도록 작성합니다. -
----------
문자열 출력)
Benz, Volvo, Audi, Tesla. -
----------
*/
// Answer 3.
var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz']; //_cars 배열 문자열 원소 지정

_cars.reverse(); // 아래 결과와 같은 문자열로 출력되도록 배열을 뒤집음
console.log(_cars) // Benz, Volvo, Audi, Tesla





/*
Quest 4.
1. searchIndex 라는 함수를 선언하고, 2개의 매개변수(첫번째는 배열, 두번째는 숫자) 를 지정합니다. -
2. 1(순서) 함수에 전달된 첫번째 매개변수 배열의 원소들과 두번째 매개변수의 숫자를 비교하여(반복문, 조건문 사용), 일치할 경우 배열의 index(원소 순서) 를 console 에 출력하도록 작성합니다. -
3. 1(순서) 함수에 각 매개변수를 지정하여 호출합니다.-
----------
함수호출 예시)
searchIndex([8, 10, 13, 30, 50], 30) 를 호출한 경우 : 3
----------
*/
// Answer 4.
function searchIndex(arr1, num1)
{
    for (i = 0; i < arr1.length; i++) // i를 0으로 지정; i의 값이 첫번째 매개변수 배열(arr1)의 길이(.length) 보다 작거나 같을때까지; 계속해서 더함(i++);
    {
        if(arr1[i] === num1) // 첫번째 매개변수의 원소 순서가 두번째 매개변수의 숫자와 일치할 경우를 지정함
        {
            console.log(i);
        }
    }
}
searchIndex([3, 5, 6, 10, 50], 3) // 0
searchIndex([3, 5, 6, 10, 50], 5) // 1
searchIndex([3, 5, 6, 10, 50], 6) // 2
searchIndex([3, 5, 6, 10, 50], 10) // 3
searchIndex([3, 5, 6, 10, 50], 50) // 4


/*
Quest 5.
1. checkType 이라는 함수를 선언하고, 1개의 매개변수(배열)를 지정합니다.-
2. 1(순서) 함수에 전달된 매개변수 배열의 원소들의 데이터 타입을 원소로 가지는 새로운 배열을 생성하여(반복문 사용) console 에 출력합니다. -
3. 1(순서) 함수에 매개변수를 지정하여 호출합니다. -
----------
함수호출 예시)
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]) 를 호출한 경우
: ['number', 'string', 'string', 'object', 'object']
----------
*/
// Answer 5.

/*
var arr2 = []; // 배열 arr2 선언
function checkType(arr2)// checkType 함수 선언 후 선언한 배열(arr2)을 1개의 매개변수로 지정
{
    for (i = 0; i < arr2.length; i++) // i를 0으로 지정; i의 값이 첫번째 매개변수 배열(arr1)의 길이(.length) 보다 작거나 같을때까지; 계속해서 더함(i++);
    {
        arr2.splice(i, 0, typeof arr2[i]);
    }
    console.log(arr2); // arr2를 출력함
}
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]);
*/ // Out of memory 가 뜨며 확인이 불가함

var _arr2 = []; // 비어있는 배열 _arr2을 선언
function checkType(arr2) // 함수 checkType를 선언 후 1개의 매개변수(arr2) 을 지정 
{
    for (i = 0; i < arr2.length; i++) // i를 0으로 지정; i의 값이 첫번째 매개변수 배열(arr1)의 길이(.length) 보다 작거나 같을때까지; 계속해서 더함(i++)
    {
        _arr2.splice(i, 0, typeof arr2[i]);
    }
    console.log(_arr2); // _arr2 출력
}
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]);

/*
Quest 6.
1. getMaxValue 이라는 함수를 선언하고, 1개의 매개변수(배열 타입)를 지정합니다.-
2. 1(순서) 함수에 전달된 매개변수 배열 원소들의 숫자 값들을 비교하여 숫자가 가장 큰 경우, 1(순서) 배열에서 해당된 순서를 결과값으로 반환합니다.-
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
var _arr3 = []; // 비어있는 배열 _arr3을 선언
var compare3; // 기준점 배열 compare3 선언
var max3; // 최고값 대입 배열 max3 선언
function getMaxValue(arr3) // 함수 getMaxValue를 선언 후 배열 타입의 arr3을 지정
{
    for (i = 0; i < arr3.length; i++) // i를 0으로 지정; i의 값이 첫번째 매개변수 배열(arr3)의 길이(.length) 보다 작거나 같을때까지; 계속해서 더함(i++)
    {
        if (typeof arr3[i] === "number")
        {
            _arr3.push(arr3[i]); 
            compare3 = _arr3[0]; 
        }
        if (arr3[i] > compare3)
        {
            compare3 = arr3[i];
            max3 = i;
        }
    }
    return max3;
}
var result;
result = getMaxValue([10, -4, 7, 100, "Hello", -50]);
console.log(result); // 3
var result;
result = getMaxValue([-400, "world", 60, 0, {}, 1000]); 
console.log(result); // 5
