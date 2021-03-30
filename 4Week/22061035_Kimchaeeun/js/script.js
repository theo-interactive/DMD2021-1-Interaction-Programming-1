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
compareNumbers(10, 20); // compareNumbers 호출

function compareNumbers(a = 0, b = 0) // 1. 두 매개변수가 숫자타입인 compareNumbers 함수 선언
{
    if (typeof b === 'undefined') // 두번째 매개변수의 전달인자 값이 할당되지 않은 경우
    {
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
    }
    if (a >= b) // 첫번째 매개변수의 전달인자 값이 두번째의 것보다 크거나 같을 경우
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
    }
    if (a < b) // 첫번째 매개변수의 전달인자 값이 두번째의 것보다 작을 경우
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
    }
}


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
getTotal(5, "multiply"); // getTotal 함수 호출

function getTotal(a = 0, b = "get") // 첫번째 매개변수가 숫자, 두번째 매개변수가 문자타입인 getTotal 함수 선언
{
    var sum = 0; // 두번째 매개변수가 "add"일 경우 연산값을 저장할 변수
    var sum2 = 1; // 두번째 매개변수가 "multiply"일 경우 연산값을 저장할 변수

    if(b == "add") // 두번째 매개변수의 전달인자 값이 "add"일 경우
    {
        for (i = 0; i <= a; i++)
        {
            sum += i; // 숫자 0부터 첫번째 매개변수의 전달인자 값까지 계속 더한 값을 sum에 저장
        }

        console.log(sum); 
        return sum;
        // sum 출력 및 반환
    }

    if(b == "multiply") // 두번째 매개변수의 전달인자 값이 "multiply"일 경우
    {
        for (i = 1; i <= a; i++)
        {
            sum2 = sum2 * i; // 숫자 1부터 첫번째 매개변수의 전달인자 값까지 계속 곱한 값을 sum2에 저장
        }

        console.log(sum2);
        return sum2;
        // sum2 출력 및 반환
    }

    else {
        console.log(0);
        return 0;
        // 두번째 매개변수의 전달인자 값이 "add"도 "multiply"도 아닌 경우
        // 0 출력 및 반환
    }
}



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
var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz']; // _cars 배열 선언
var saycars = ''; // _cars 배열의 원소 순서를 담아둘 변수 saycars 선언
// console.log(_cars.length);

for (i = _cars.length - 1; i >= 0; i--) // _cars의 마지막 순서(3)에서 첫번째 순서(0)까지
{
    saycars += _cars[i]; // saycars에 거듭하여 현재 사이클의 _cars 값 추가

    if ((0 < i) && (i < _cars.length)) 
    {
        saycars += ', '; // _cars 배열의 첫번째 순서 값이 아닌 경우 saycars에 ', ' 추가
    }

    if (i == 0){
        saycars += '.'; // _cars 배열의 첫번째 순서 값인 경우 saycars에 '.' 추가
    }
}
console.log(saycars);



/*
Quest 4.
1. searchIndex 라는 함수를 선언하고, 2개의 매개변수(첫번째는 배열, 두번째는 숫자) 를 지정합니다.
2. 1(순서) 함수에 전달된 첫번째 매개변수 배열의 원소들과 두번째 매개변수의 숫자를 비교하여(반복문, 조건문 사용),
    일치할 경우 배열의 index(원소 순서) 를 console 에 출력하도록 작성합니다.
3. 1(순서) 함수에 각 매개변수를 지정하여 호출합니다.

----------
함수호출 예시)

searchIndex([8, 10, 13, 30, 50], 30) 를 호출한 경우 : 3
----------
*/
// Answer 4.
searchIndex([8, 10, 13, 30, 50], 30); // searchIndex 함수 호출

/* [1차 실패]
function searchIndex (a = [], b = 0) {
    for (i = 0; i < a.length; i++){
        if (a[i] = b){
            console.log(a.index);
        }
    }
}
*/

function searchIndex (a = [], b = 0) // 첫번째 매개변수가 배열이고 두번째 매개변수가 숫자인 searchIndex 함수 선언
{
    for (var i in a) // 첫번째 매개변수에 할당된 전달 인자(배열)의 첫번째 원소 부터 마지막 원소 까지
    {
        if(a[i] == b) 
        {
            console.log(i); // 현재 사이클의 원소값이 두번째 매개변수에 할당된 전달 인자의 값과 같을경우 현재 순서 출력
        }
    }
}



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
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]) //checkType 함수 호출

/* [2차 실패]
function checkType (a = []) {
    for(var i  in a){
        var types = [types] + [typeof a[i]];
    }
    
    console.log(types);
    console.log(typeof types);
}
*/

/* [3차 실패]
function checkType (a = []) {
    for(var i  in a){
        if(i == 0){
            var types = [] + [typeof a[i]];
        }
        
        else{
            types = types + [typeof a[i]];
        }
    }
    
    console.log(types);
    console.log(typeof types);
}
*/

function checkType (a = []) // 배열 형식의 매개변수를 갖는 checkType 함수 선언
{
    var types = []; // 원소 데이터 타입들을 저장해 둘 배열 변수 types 선언

    for(var i  in a) 
    {
        types.push(typeof a[i]); // 매개변수에 할당된 전달인자(배열)의 첫번째 원소값부터 마지막 원소값까지 types 배열에 현재 사이클의 원소값 추가
    }
    
    console.log(types);
}



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
getMaxValue([10, -4, 7, 100, "hello", -50]); // getMaxValue 함수 호출

/* [4차 실패]
function getMaxValue(a = []){
    var big = 0;

    for(var i in a){
        if((typeof a[i] == 'number') && (a[i] > big)){
            big = a[i];
        }
    }
    
    console.log(length.a[i]);
}
*/

function getMaxValue(a = []) // 배열타입의 매개변수를 갖는 함수 getMaxValue 선언
{
    var big = 0; // 전달인자 내의 숫자 타입 원소값들 중 최댓값을 저장할 변수 big 선언
    var turn; // 전달인자 내의 숫자 타입 원소값들 중 최댓값의 배열 내 순서를 저장할 변수 turn 선언

    for(var i in a) // 첫번째 매개변수에 할당된 전달 인자(배열)의 첫번째 원소 부터 마지막 원소 까지
    {
        if((typeof a[i] == 'number') && (a[i] > big)) 
        {
            big = a[i]; // 현재 사이클의 원소값이 숫자 타입임과 동시에 변수 big 보다 클 경우 big에 현재 사이클의 원소값 저장
            turn = a.indexOf(a[i]); // 현재 사이클의 원소값 순서를 turn에 저장
        }
    }
    
    console.log(turn);
    return turn;
    // turn 출력 및 반환
}

