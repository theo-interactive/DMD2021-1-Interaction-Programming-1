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

//compareNumbers 함수 선언
function compareNumbers (num1, num2) //매개변수 지정
{
    if(typeof num2 === "undefined") // 두번째 매개변수 값이 할당되지 않은 상태
    {
        console.log("두번째 매개 변수의 값을 찾을 수 없습니다."); //"두번째 매개변수의 값을 찾을 수 없습니다." 출력
    }
    else if (num1 >= num2) // 첫번째 매개변수와 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
    }
    else //num1 이 num2보다 작은 경우 (num1 < num2)
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
    }
}
compareNumbers(10); // "두번째 매개변수의 값을 찾을 수 없습니다"
compareNumbers(20, 10); //"첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."
compareNumbers(10, 20); //"첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."



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

//getTotal 선언
function getTotal(num3 , string1)
{
    if (string1 === "add") // 두번째 매재변수 값이 add 인 경우
    {
        var sum = 0; //모든 값을 더해줄 변수 sum 생성
        for ( i = 1; i <= num3; i++) //1부터 더해야 하기때문에 i 값은 1로 설정, num3보다 작거나 같으면 더하도록 설정
        {
            sum += i;
        }
        return sum; //더한 값 반환한다.
    }
    else if(string1 === "multiply") //두번째 매재변수 값이 multiply 인 경우
    {
        var multiply = 1; // 0으로 설정했다가 모두 0으로 되길래 1로 수정..... 주의하기....
        for (i = 1; i <= num3; i++) //1부토 곱하기 위해서 i를 1로 주었고  num3보다 작으면 곱하도록 설정
        {
            multiply *= i;
        }
        return multiply;
    }
    else if (string1 !== "add" && string1 !== "multiply") //add 도 multiply도 아닐경우
    {
        return 0;
    }
}
var rusult;
result = getTotal(5, "add");
console.log(result); //15

result = getTotal(10, "add");
console.log(result); // 55

result = getTotal(5, "multiply");
console.log(result); //120

result = getTotal(10, "multiply")
console.log(result); // 3628800

result = getTotal(100);
console.log(result); //0



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

//_cars 배열 선언
var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];

_cars.reverse(); //반대로 정렬
console.log(_cars); // Benz, Volvo, Audi, Tesla


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

function searchIndex (arr1, num4) //2개의 매개변수 선언
{
    for (i = 0; i < arr1.length; i++ ) //i 선언 및 0 초기화 , i가 arr1보다 작을때 i가 1씩 증가
    {
        if (arr1[i] === num4) //arr1과 num4가 같을 경우
        {
            console.log(i); //i 출력
        }
    }
}
searchIndex([8, 10, 13, 30, 50], 30) ;



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



// function checkType(arr2)
// {
//     for (var i = 0; i < arr2.length; i++ )
//     {
//         var arr2

//     }
// }
// 아무생각 없이 하다가 아닌것 같아서 다시했습니다....


var _arr2 = [];
function checkType (arr2)
{
    for (var i = 0; i < arr2.length; i++ )
    {
        _arr2.splice(i, 0 , typeof arr2[i])
    }
    console.log(_arr2);
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

var _arr3 = [];
function getMaxValue(arr3)
{
    for ( i = 0; i < arr3.length; i++) //i를 0부터 배열의 범위보다 작은 동안 실행 후, i를 1씩 증가하여 반복 
    {
        if (typeof arr3[i] == "number") //숫자만 골라내도록 조건문 출력
        {
            number.push(arr3[i]);
            standard = number[0];
        }
        if (arr3[i] > standard);
        {
            standard = arr3[i];
            max = 1; 
        }

    }return max; //max 반환
}
var result2; //결과값 저장할 변수 출력

result2 = getMaxValue([10, -4, 7, 100, "hello", -50])
console.log(result2); // 3

result2 = getMaxValue([-400, "world", 60, 0, {}, 1000])
console.log(result2); // 5



