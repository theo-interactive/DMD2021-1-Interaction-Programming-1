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


function compareNumbers(num1,num2){

    // console.log(num2); // null인지 undefined인지 알아보기 위해 출력

    if(num2 == undefined){ // 조건이 b == null이어도 아래 코드가 실행됨
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
    }else{
        if(num1 >= num2){
            console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
        }
        else{
            console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
        }
    }
}

compareNumbers(10); // 첫 번째 if문이 실행됨
compareNumbers(20, 10); // 두 번째 else if문이 실행됨
compareNumbers(10, 20); // 세 번째 else문이 실행됨 , 문제 해결!



/*
Quest 2.
1. getTotal 이라는 함수를 선언하고, 2개의 매개변수(첫번째는 숫자 타입, 두번째는 문자 타입)를 지정합니다.
2. 조건 1-1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "add" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 
모두 덧셈 연산하여 결과값을 반환합니다.
3. 조건 1-2 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "multiply" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 
모두 곱셈 연산하여 결과값을 반환합니다.
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

function getTotal(num3 , str1){
    if(str1 == "add"){ // 매개변수로 받아온 문자열 값이 "add"면

        var add = 0; // 덧셈 결과값을 담을 변수 선언(해당 if문에서만 쓰임)

        for(i = 1; i <= num3; i++){ // 매개변수(숫자) c보다 같거나 작을 때만 반복문 돌림(= 매개변수 c의 값까지 순서대로 더함)
            add += i; 
        }
        return add; // 결과값을 반환
    }
    else if(str1 == "multiply"){ // 매개변수로 받아온 문자열 값이 "multiply"면

        var multiply = 1; // 곱셈 결과값을 담을 변수 선언, 곱셈 결과값이 0이 되도록 하지 않기 위해 값에 1을 넣어둠(중요)

        for(i = 1; i <= num3; i++){ // 마찬가지로 매개변수 c와 같거나 작을 때만 반복문 돌림.

            multiply *= i;
        }
        return multiply; // 결과값을 반환
    }
    else{ // 위의 두 조건에 부합하지 않으면, 아래 코드 실행
        return 0; // 숫자 0을 반환
    }    
}


var q2Sum; // 반환 값을 호출할 변수 선언.

q2Sum = getTotal(5, "add");
console.log(q2Sum); // 15 출력

q2Sum  = getTotal(10, "add");
console.log(q2Sum); // 55 출력

q2Sum  = getTotal(5, "multiply");
console.log(q2Sum); // 120 출력

q2Sum  = getTotal(10, "multiply");
console.log(q2Sum); // 3628800 출력

q2Sum  = getTotal(100); // 0 출력, 문제 해결!
console.log(q2Sum);


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
console.log(_cars);

_cars.reverse(); // 기존 배열의 순서를 거꾸로 뒤집으면 정답이니 reverse를 이용해 배열의 순서를 반대로 정렬해준다.
console.log(_cars); // Benz, Volvo, Audi, Tesla 순으로 잘 출력됨, 문제 해결!



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
function searchIndex(arr, num4){ // 배열과 숫자 매개변수 지정
    for(i=0; i <= arr.length; i++){ // 배열의 크기만큼 반복문을 돌려서
        if(arr[i] == num4){ // 배열의 i번째 원소가 매개변수의 숫자(num4)와 같다면
            console.log(i + 1); //원소의 순서를 출력, 배열의 i(index)는 0부터 시작하므로 1을 더해 출력해야 알아보기 쉬운 위치(순서)가 나옴.
        }
        else{
            // console.log("두 값이 서로 같지 않습니다"); // 값이 다르면 다르다는 문자열 메세지 출력
        }
    }
}  

searchIndex([90, 50, 60, 30, 40, 60, 22, 44, 31, 99, 30], 30); // 함수에 각 매개변수를 지정하여 호출
//4번째와 11번째에 숫자 매개변수와 같은 값이 들어가 있음, 출력된 값은 4와 11. 문제 해결!


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


function checkType(arr2){ // 배열을 받아오는 함수 선언
    var newArr = [];
    for(i=0; i < arr2.length; i++){ 
        // i가 매개변수 배열의 크기보다 1작은 수가 될 때까지 반복문을 돌림 (ex: 배열의 크기가 5면, 0~4까지 도는 것이므로 5번 = 배열의 크기만큼 돌게된다.)
        newArr[i] =  arr2[i]; // new배열의 i번째 원소 값 = 매개변수 배열의 i번째 원소값으로 대입
        // console.log(newArr); // 출력해보면, 매개변수 배열의 값이 순서대로 대입되어 가는 것을 알 수 있다.
    }
    // console.log(newArr); // 반복문이 끝나고 값이 잘 전달되었는지 확인.
}
checkType([1,2,3,4,5,6,7,8]);
checkType([1,2,'3', "안녕하세요4", undefined, null, "끝"]); // 여러 데이터 타입을 넣어도 잘 출력되는 것을 확인할 수 있다, 문제 해결!


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

function getMaxValue(arr3){ // 배열을 받아오는 함수 선언
    var currentNum = arr3[0]; // 원소 값 비교를 위해 먼저 가장 첫 번째 원소를 변수에 대입해 둠
    var largestNum = 0; // 가장 마지막에 출력될 가장 큰 원소값을 가질 배열의 순서를 담아둘 변수

    for(i=1; i<arr3.length; i++){ // 매개변수 배열의 크기만큼 반복문을 돌림, 0번째는 0번째와 비교할 필요가 없으므로 i는 1부터시작
        if(currentNum < arr3[i]){ // currentNum에 등록된 값보다 현재 반복문의 원소의 값이 더 크다면
            largestNum = i + 1; // largestNum의 값을 현재 반복문에 해당하는 매개변수 배열의 순서로 바꿈(가장 큰 수가 담긴 배열의 위치를 갱신), 
                                //순서를 알기 쉽게 1을 더해줌(배열의 index는 0부터 시작해서 헷갈릴 위험 방지)
        }
        else{// 현재 비교하는 매개변수 배열의 i번째 원소의 값이 currentNum에 등록되어있는 수보다 작으면
            // console.log("비교하는 값이 등록된 값보다 작습니다."); 메세지 출력.
        }
    }
    // console.log(largestNum); // 가장 큰 매개변수 배열의 원소값이 든 순서를 출력
    return largestNum; // 가장 큰 매개변수 배열의 원소값이 든 순서를 반환시킴
}

var q6Sum;
q6Sum = getMaxValue([2,3,"4",6,7,"반갑습니다8",'char9']);
console.log(q6Sum);
//일단 숫자만 비교하므로 출력되는 수는 가장 큰 숫자타입 원소인 7의 위치(순서)인 5, 문제 해결!


q6Sum = getMaxValue([10, -4, 7, 100, "hello", -50]);
console.log(q6Sum);

q6Sum = getMaxValue([-400, "world", 60, 0, {}, 1000]);
console.log(q6Sum); 
// 문제 풀이에는 3과 5가 출력되어야한다고 되어있지만, 원소의 위치를 한눈에 알기 위해 1을 더한 수를 출력하게 했기 때문에 각각 4와 6이 출력되었습니다.
// 아무튼 문제 해결!