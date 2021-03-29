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

// compareNumbers 함수 선언
function compareNumbers(number1, number2) // 숫자 타입의 매개변수를 두 개 지정
{
    if (typeof number2 === "undefined") // 두번째 매개변수의 값이 할당되지 않은 경우(udefuned 상태)
    {
        console.log("두번째 매개변수의 값을 찾을 수 없습니다."); // "두번째 매개변수의 값을 찾을 수 없습니다." 라는 문구가 출력
    }
    else if (number1 >= number2) // 첫번째 매개변수에 할당된 전달인자읙 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같은 경우
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
        // "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다." 라는 문구 출력
    }
    else // number1이 number2보다 작은 경우
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
        // "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다." 라는 문구 출력
    }
}
    compareNumbers(10); // "두번째 매개변수의 값을 찾을 수 없습니다."
    compareNumbers(20, 10); // "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."
    compareNumbers(10, 20); // "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."


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

// getTotal 함수 선언
function getTotal(number3, string1) // 숫자 타입의 매개변수와 문자 타입의 매개변수를 지정
{
    if (string1 == "add") // 두번째 매개변수의 값이 "add"인 경우
    {
        // 변수 sum을 선언과 동시에 0으로 초기화하여 누적 덧셈 결과값을 담을 그릇 생성
        var sum = 0;
        for (i = 1; i <= number3; i++) // 1 부터 첫번째 매개변수의 전달인자 값까지(매개변수의 값을 포함하기 위해 i보다 크거나 같게 설정)
        {
            sum += i; // 누적 덧셈식을 이용하여 더한 뒤
        }
        return sum; // 더한 값을 반환합니다.
    }
    else if (string1 == "multiply") // 두번째 매개변수의 값이 "multiply"인 경우
    {
        // 변수 multiply를 선언과 동시에 1로 초기화하여(0으로 하면 0 * ? = 0이 되므로 1로 설정) 누적 곱셈 결과값을 담을 그릇 생성
        var multiply = 1;
        for(i = 1; i <= number3; i++) // 숫자 1 부터 첫번째 매개변수의 전달인자 값까지(매개변수의 값을 포함하기 위해 i보다 크거나 같게 설정)
        {
            multiply *= i; // 누적 곱셈식을 이용하여 곱한 뒤
        }
        return multiply; // 곱한 값을 반환합니다.
    }
    else if ((string1 !== "add") && (string1 !== "multiply")) // 조건1과 2 둘 다 부합하지 않는 경우
    {
        return 0; // 0을 반환합니다.
    }
}

var result; // 모든 결과값을 호출하여 보여줄 변수 result 생성

// 첫번째 매개변수에 5, 두번째 매개변수에 "add"를 대입할 시
result = getTotal(5, "add");
// 결과값 호출 후 출력
console.log(result); // 15

// 첫번째 매개변수에 10, 두번째 매개변수에 "add"를 대입할 시
result = getTotal(10, "add")
// 결과값 호출 후 출력
console.log(result); // 55

// 첫번째 매개변수에 5, 두번째 매개변수에 "multiply"를 대입할 시
result = getTotal(5, "multiply")
// 결과값 호출 후 출력
console.log(result); // 120

// 첫번째 매개변수에 10, 두번째 매개변수에 "multiply"를 대입할 시
result = getTotal(10, "multiply")
// 결과값 호출 후 출력
console.log(result); // 3628800

// 첫번째 매개변수에 100을 대입할 시
result = getTotal(100)
// 결과값 호출 후 출력
console.log(result); // 0


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

// _cars 변수 배열 선언
var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];

// 문자열 원소의 순서를 반대로 정렬
_cars.reverse();
// _cars 배열 출력
console.log(_cars); //  ["Benz", "Volvo", "Audi", "Tesla"]


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

// searchIndex 함수 선언
function searchIndex(arr1, number4) // 배열 타입의 매개변수와 숫자 타입의 매개변수를 지정
{
    for (i = 0; i < arr1.length; i++) // i를 선언과 동시에 0으로 초기화하며
    // i가 배열 arr1의 범위보다 작은 동안 실행 후 i가 1씩 증가
    {
    if (arr1[i] == number4) // 만약 arr(i)(= arr배열의 개별 원소)가 number4와 일치할 경우
    {
        console.log(i); // 해당 원소의 순서 출력
    }   
    }

}

// searchIndex에 매개변수 지정 후 호출
searchIndex([8, 10, 13, 30, 50], 30); // 3

 
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

var dataType = []; // arr2 배열의 원소들의 데이터 타입을 담을 변수 dataType 선언
// 함수 checkType 선언
// function checkType(arr2) // 배열 타입의 매개변수를 지정
// {
//     for(i = 0; i <= arr2.length; i++)// i를 선언과 동시에 0으로 초기화 후 i가 배열의 범위와 같거나 작은 동안 반복하여 실행 후 i를 1씩 증가
//     {
//         dataType += typeof[i]; // dataType에 arr2 배열의 개별 원소 데이터 타입을 대입

//     }
//     console.log(dataType);

// }
// 이렇게 하면 누적 덧셈처럼 데이터 타입이 누적될 줄 알았는데 그건 착각이었습니다.
// object값만 나와 변경을 해보았습니다.

function checkType(arr2) // 배열 타입의 매개변수를 지정
{
    for(i = 0; i < arr2.length; i++)// i를 선언과 동시에 0으로 초기화 후 i가 배열의 범위보다 작은 동안 실행 후 i를 1씩 증가
    {
        dataType.splice(i, 0, typeof arr2[i]); // splice를 응용하여 순서대로 하나씩 누적되어 원소의 데이터 타입이 누적되도록 함

    }
    console.log(dataType); // 결과값을 한번에 출력

}

// checkType에 매개변수를 지정하여 호출
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]); //  ["number", "string", "string", "object", "object"]


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

// getMaxValue 함수 선언
// function getMaxValue(arr3) // 배열 타입의 매개변수 지정
// {
//     var max = 0; // 최고값을 담을 변수 max 선언
//     for (i = 0; i < arr3.lenght; i++) // i는 1부터 시작하여(기준 원소를 0번째부터로 지정했기 때문) i가 배열 arr3의 범위보다 작을 경우, 실행문 실행 후 i를 1씩 증가하며 반복
//     {
//       if (typeof arr3[i] === "number") // 데이터 타입이 number인 원소만 구분
//      {
//        var compare = arr3[0]; // 비교 기준 원소를 첫번째 원소로 지정
//        if(arr3[i] >= compare) // 만약 arr3[i]가 compare(= arr3[0])보다 큰 경우
//        {
//          max = arr3[i] // 해당 원소를 max 변수에 대입
//        }
//        else if(arr3[i] < compare) // 만약 arr3[i]가 compare(= arr3[0])보다 작은 경우
//        {
//          max = compare // compare를 max 변수에 대입
//        }
//      }
//     }
//     return max;
// }
// 이렇게 시도했었으나 기준점을 잘못 설정하여 제대로 실행되지 않는 것 같습니다.
// 위 식을 활용하여 명확히 기준 원소를 잡아준 뒤 숫자끼리 비교를 진행합니다.

var number = []; // if문을 통해 데이터 타입이 number인 원소들만 담을 배열을 생성합니다.
var compare; // 비교의 기준점이 될 compare 변수를 선언합니다.
var max; // 최고값을 담을 변수 max를 선언합니다.

// getMaxValue 함수를 선언
function getMaxValue(arr3)
{
    for(i = 0; i < arr3.length; i++) // i를 0부터 시작하여 배열의 범위보다 작은 동안 실행 후, i를 1씩 증가하여 반복 
    {
        if(typeof arr3[i] === "number") // 조건문을 통해 데이터 타입이 number인 원소만 구분
        {
            number.push(arr3[i]); // number 배열에 push 기능을 이용해 데이터 타입이 number인 원소만 차례대로 추가
            compare = number[0]; // 비교의 기준점인 compare에 숫자 원소들 중 첫번째에 위치한 원소를 넣어 기준으로 선정
        }

        if(arr3[i] > compare) // 만약 배열 arr3의 원소가 기준인 compare보다 크면 
        {
            compare = arr3[i]; // compare 기준값을 배열 arr3의 원소로 대입
            max = i; // 그 후, 최고값을 담는 max 변수에 i를 넣어 해당 최고값의 순서를 대입
        }
    }
    return max; // 최고값의 순서인 max를 반환합니다.
}
// 결과값을 저장할 변수 result2 생성
var result2;

// arr3 배열에 매개변수를 대입할 시
result2 = getMaxValue([10, -4, 7, 100, "hello", -50])
// 결과값 호출 후 출력
console.log(result2); // 3
// arr3 배열에 매개변수를 대입할 시
result2 = getMaxValue([-400, "world", 60, 0, {}, 1000])
// 결과값 호출 후 출력
console.log(result2); // 5
