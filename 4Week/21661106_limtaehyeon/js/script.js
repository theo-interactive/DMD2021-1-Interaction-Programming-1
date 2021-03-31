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

function compareNumbers (num1, num2) { 
    // 매개변수  num1, num2 를 생성해 받을 준비를 합니다.
    if(num2 == undefined) {
        // 할당되지 않음 == undefined 이다. 
        // 값을 출력한다.
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.")
    }
    else if(num1 >= num2) {
        // 앞에 있는 매개변수가 크거나 같을때 출력
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.")
    }
    else {
        // 비교했을때 앞에 있는 매개변수가 작을때
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.")
    }
};
compareNumbers(30, 50);
// 함수를 출력하고 매개변수에 들어갈 값을 입력한다.


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
var ifAdd = 0;
// add일때 i의 값을 담아줄 변수
var ifMul = 0;
// multiply일때 i의 값을 담아줄 변수
function getTotal (num3, msg) {
    // num3Length = num3.toString().length;  // 처음에는 이렇게 해야 i의 자리를 구할수있을거라고 생각했다.
    if(msg == "add"){
        //두번째 매개변수가 add일때
        for(var i=1;i<=num3; i++){
            ifAdd += i;
             //i를num3까지의 숫자까지 차례로 더한값을 담는다.
        }
        return ifAdd;
        // 담은 값을 다시 리턴한다.
    }
    else if (msg == "multiply") {
        //두번째 매개변수가 multiply일때
        for (var i = 1; i <= num3; i++) {
            ifMul *= i;
            //i를num3까지의 숫자까지 차례로 곱한값을 담는다.
        }
        return ifMul;
        // 담은 값을 다시 리턴한다.
        
    }
    else{
        // 둘다 아닌 경우 0을 리턴
        return 0;
        // 담은 값을 다시 리턴한다.
    }
}
var sum = getTotal(10, "add");
// 함수를 출력하고 매개변수에 들어갈 값을 입력한다.
// 그리고 그 함수를 변수에 담는다.
console.log(sum);
// 출력한다


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
// 배열변수를 선언한다.
var reverse = _cars.reverse();
// reverse는 배열의 순서를 뒤바꾼다.
// reverse라는 변수에 _cars변수의 reverse한 배열을 다시 담는다.
console.log(reverse);
// 값을 출력한다.


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
function searchIndex (aronein, num4) {
    // aronein은 배열을 담을 매개변수이고 num4는 숫자를 담을 매개변수
    for(var i = 0; i<aronein.length; i++) {
        // aronein에는aroneout의 배열이 담겨있고, aronein.length는 5다.
        if(aronein[i]==num4) {
            // aroneinm의 i번 배열의 값이 num4랑 같다면
            return i;
            // i번 자리를 값으로 돌려준다.
        }
    }
}
var aroneout = [1, 32, 20, 45, 60];
// aronein이라는 매개변수에 담을 배열
var search = searchIndex(aroneout, 20);
// search에 searchIndex의 매개변수를 담을 값을 입력한다.
console.log(search);
// 그 값을 출력한다.


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
function checkType(vari) {
    // vari라는 매개변수를 만들어 담을 준비를 한다.
    for(var i = 0;i<vari.length; i++) {
        var ty;
        ty += " "+typeof vari[i];
        // ty 라는 변수에 " "+vari[i] 의 타입을 담는다. 
    }
    console.log(ty);
    // ty변수에 담긴 값을 출력한다.
}
var arvari = [10, "string", (30,50), ("ㅋㅋ","ㅇㅇ"), ("name")];
// arvari라는 변수에 값을 담는다.
checkType(arvari); 
// arvari값을 출력한다.



//!!!!!!!!!!!!!!!!!!!결과창에 맨 처음 undefined가 왜 나오는지 궁금합니다!!!!!!!!!!!!!!!!!!!!!



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
var max1= 0, max2 = 0;
// 최대값을 구할때 필요한 변수를 만든다.
var index1=0,index2 = 0;
// 자릿수를 담을 자릿변수를 만든다.
function getMaxValue(arReceive){
    // arReceive라는 매개변수를 만든다.
    if(arReceive == arfirst){
        // arReceive 의 값이랑 arfirst 값이다.
        for(var i =0;i<arReceive.length; i++){
            if(max1 < arReceive[i]){
                max1 = arReceive[i];
                // max1 arReceive[i]의 값을 담는다.
                index1 = i;
                // i자릿값을 넣는다.
            }
        }
        console.log(index1);
        // 출력한다.
    }
    else if(arReceive == arsecond){
        // arReceive에 담긴 값이 arsecond와 같은때
        for (var i = 0; i < arReceive.length; i++) {
            if (max2 < arReceive[i]) {
                max2 = arReceive[i];
                index2 = i;
            }
        }
        console.log(index2);
        // 출력한다.
    }
}
var arfirst = [20, 40, 100, -20, "lim", 20.49];
// arfirst라는배열을 만든다. 
var arsecond = [{}, 20, "string", 5.43, 60.43];
// arsecond라는배열을 만든다.
getMaxValue(arfirst);
// arfirst에 담긴 return값을 출력한다.
getMaxValue(arsecond);
// arsecond에 담긴 return값을 출력한다.