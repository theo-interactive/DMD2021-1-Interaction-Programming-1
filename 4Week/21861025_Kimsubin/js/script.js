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

// 함수 함수이름 (매개변수)
function compareNumbers(num1, num2) // 함수 compareNumbers 선언 (매개변수 num1, num2 지정)
{
    if (typeof num2 === 'undefined') // num2의 타입이 undefined 와 같을 경우
                                     // typeof num2 가 아닌 num2 로 할경우 1번, 3번 조건이 출력된다.
                                     // num2 로 할 경우 undefined를 값으로 계산하여 10 < undefined 가 성립되는 것으로 계산하는거 같다.
    {
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
    }
    else if (num1 >= num2)
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
    }
    else // (num1 < num2) 마지막의 조건은 else if 의 조건에 해당되지 않은 예외의 경우이므로 생략
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
    }
}
compareNumbers(10); // num1 = 10 이고 num2의 값은 지정하지 않았으므로 값 undefined를 가지게되어 1번 조건 출력
compareNumbers(20, 10); // num1 = 20, num2 = 10 이므로 20 >= 10 연산이 성립되므로 2번 조건 출력
compareNumbers(10, 20); // num1 = 10, num2 = 20 이므로 1번, 2번 조건이 전부 성립 안되므로 else 조건 충족되어 출력



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

function getTotal(num1, string1)
{
    if(string1 === "add") // string1 이 "add" 와 같을 때
    {
        var sum = 0; // 값을 모을 공간 sum 생성
        for(var i = 1; i <= num1; i++) // i = 1 이다. i 가 num1 보다 작거나 같을 때, i++ (i = i + 1)를 반복한다.
        {
            sum += i; // sum = sum + i // 위의 조건이 충족되면 i의 값이 1씩 증가하므로 그 값을 매번 sum에 + 하여 대입
            // console.log(sum); // 반복 과정이 일어날 때마다 값을 출력
        }
        console.log(sum); // 값을 리턴한 후, sum += i; 의 과정을 조건이 해당될 때까지 진행하고 나서의 값을 출력
        return sum; // 진행된 sum의 값을 변수sum에 리턴 시켜 대입
    }
    else if(string1 === "multiply") // string1 이 "multiply" 와 같을 때
    {
        var mul = 1; // 위와 다르게 값을 모을 공간 mul 변수의 값을 1로 지정 : 곱연산을 할경우 빈공간의 값이 0 일경우 값은 항상 0이 나오므로
                     // 값을 1로 지정하여 어떠한 수와 곱해도 값의 변화가 일어나지 않게 지정 
        for(var i = 1; i <= num1; i++) // i = 1 이다. i 가 num1 보다 작거나 같을 때, i++ (i = i + 1)를 반복한다.
        {
            mul *= i; // mul = mul * i
        }
        console.log(mul);
        return mul; // mul *= i 의 값을 변수 mul 에 리턴 시켜 대입한다.
    }
    else // 조건 if와 else if가 성립하지 않을 경우
    {
        return 0; // 0의 값을 리턴 시킨다.
    }
}
// if의 경우 조건을 충족할 때 sum 이라는 변수에 대입하여 콘솔창에 출력
// else if의 경우 조건을 충족할 때 mul 이라는 변수에 대입하여 콘솔창에 출력
// else의 경우 현재 리턴시켜 대입할 변수가 없으므로 값을 대입시킬 변수를 선언해주어야한다.


getTotal(5, "add")
getTotal(10, "add")
getTotal(5, "multiply")
getTotal(10, "multiply")
result =  getTotal(100)
console.log(result)
/*
마지막 0 를 출력해야하는데 다른 2개의 조건의 경우 값을 담을 변수를 만들고 모든 과정 이후 그 변수를 콘솔창에 출력하면 됬지만
마지막의 경우 그 과정이 없으므로 리턴 값을 담을 변수가 없어서 매개변수를 선언하는 함수에 변수를 선언하고 콘솔창에 출력했습니다.
*/

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

var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz']; // 변수 선언후, 배열을 만든다.
// 문제에서 출력한 순서를 파악 - 현재 배열을 거꾸로 출력
_cars.reverse(); // _cars 변수 reverse(거꾸로.반대로) (_cars의 값);
console.log(_cars) // _cars 값의 배열을 reverse 했으므로 ["Benz", "Volvo", "Audi", "Tesla"] 로 출력된다.


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

function searchIndex(arr1, num1) // 함수선언 함수이름 (매개변수 배열, 숫자)
{
    for(var i = 0; i < arr1.length; i++) // i = 0 이다. i의 값이 arr1배열의 길이보다 작거나 같을 때 i++를 반복한다.
    // 배열은 0부터 시작하므로 i 의 값을 0 으로 시작한다.
    // 배열의 길이는 5
    // 배열 순서 0 1 2 3 4 로 길이 5이므로 i가 arr1 배열의 길이보다 작을 때 i < 5 로 반복조건 작성
    // i <= 5 일 경우 0 1 2 3 4 5 이 되므로 배열이 6개가 된다. 
    {
        if(arr1[i] === num1)
        {
            console.log(i);
        }
    }
}
searchIndex([8, 10, 13, 30, 50], 8) // 0
searchIndex([8, 10, 13, 30, 50], 10) // 1
searchIndex([8, 10, 13, 30, 50], 13) // 2
searchIndex([8, 10, 13, 30, 50], 30) // 3
searchIndex([8, 10, 13, 30, 50], 50) // 4

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

//문제 해석
/*
1. checkType 함수 선언 후, 매개변수(배열) 1개 만든다.
2. checkType(배열)에서 (배열)에 들어갈 변수를 호출
3. checkType의 배열 값을 데이터타입으로 바꾼 새로운 배열 1개 생성
4. checkType 값을 데이터타입으로 바꿀 반복문 작성
*/

// 새로운 배열 생성
var arr2 = []; // 새로운 변수에는 arr1 배열의 데이터타입을 원소로 하여 배열을 만들어야한다.

// 해야하는것...arr1 배열의 이름을 데이터타입에 맞춰서 바꾼 후 arr2에 대입해줘야한다.

function checkType(arr1) // checkType 함수 선언 후, 매개변수 1개 지정
{
    for(i = 0; i < arr1.length; i++) // arr.length = 5 : 배열 0 1 2 3 4
    {
        // i < 5 가 성립되면 i = i + 1 반복하여 배열 0 ~ 4번까지 전부 언급
        // arr1의 배열값을 데이터타입으로 이름 수정
        // 배열 수정할 때는 배열이름.splice : 배열의 수정, 추가, 삭제 - 현재의 문제에서는 배열의 갯수는 그대로 유지하되 이름을 수정하는 작업
        // 배열이름.splice(시작지점, 삭제할 원소의 개수, 추가할 원소);

        arr2.splice(i, 0, typeof arr1[i]);

        // 위에서 선언한 새로운 배열 arr2에 수정한다.
        // arr2.splice(i의 지점을 설정, 수정을 하는것뿐이므로 삭제할 갯수는 0개, 추가(변경)할 원소는 arr1의 i 지점을 데이터타입으로);
    }
    console.log(arr2);
}
checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]) // 매개변수 지정한 곳에 변수값 호출



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

// 문제해석
/*
1. getMaxValue 라는 함수를 선언하고 매개변수로 배열 1개를 지정
2. getMaxValue 함수의 매개변수에 값을 호출
3. 호출된 값 중에서 숫자 값들만 분류
4. 분류된 값 중에서 가장 큰 값을 찾는다.
5. 가장 큰 숫자 값이 getMaxValue 함수의 매개변수 값에서 몇번째에 있는지 출력

* 주의 : getMaxValue 함수의 매개변수 배열값에는 숫자 이외의 타입도 존재
*/

var arr2 = []; // 분류된 값을 받을 새로운 변수
var maxarr; // 분류된 값에서 값 1개를 받을 변수
var max = 0;
/*
function getMaxValue(arr1) // getMaxValue 함수 선언 후, 매개변수 배열 1개 지정
{
    for(i = 0; i < arr1.length; i++) // arr1의 모든 배열값을 언급
    {
        // 숫자만을 비교해야하기 때문에 우선 숫자 이외의 값을 찾아서 빼야한다.
        // arr1을 데이터 타입으로 했을 때, 숫자인 값만 찾는다.
        if(typeof arr1[i] === 'number') // 만약 배열의 타입이 숫자일 때
        {
            arr2.push(arr1[i]); // arr2 배열변수의 값으로 추가한다. 
            // unshift, push 둘 다 추가 기능이지만 getMaxValue(arr1)과 순서를 같게 하기위해 push 사용
            maxarr = arr2[0]; // 우선 maxarr 변수에 arr2 값 중 하나를 넣는다.
        }
        if(maxarr < arr2[i]) // 10의 값이 arr2 의 i번째 값보다 작을 때
        {
            maxarr = arr2[i]; // maxarr의 값은 arr2[i]값이 된다.
        }
    }
    console.log(arr2); // [10, -4, 7, 100, -50] 이 값 중 가장 큰 값을 찾아서 분류한다.
    console.log(maxarr); // 10
}
*/
/*
function getMaxValue(arr1) // getMaxValue 함수 선언 후, 매개변수 배열 1개 지정
{
    for(i = 0; i < arr1.length; i++) // arr1의 모든 배열값을 언급
    {
        // 숫자만을 비교해야하기 때문에 우선 숫자 이외의 값을 찾아서 빼야한다.
        // arr1을 데이터 타입으로 했을 때, 숫자인 값만 찾는다.
        if(typeof arr1[i] === 'number') // 만약 배열의 타입이 숫자일 때
        {
            arr2.push(arr1[i]); // arr2 배열변수의 값으로 추가한다. 
            // unshift, push 둘 다 추가 기능이지만 getMaxValue(arr1)과 순서를 같게 하기위해 push 사용
            maxarr = arr2[0]; // 우선 maxarr 변수에 arr2 값 중 하나를 넣는다.
        }
    }
    console.log(arr2); // [10, -4, 7, 100, -50] // [-400, 60, 0, 1000]
    console.log(maxarr); // 10 // -400

    // arr2의 배열 중 가장 큰 값을 찾아야 한다.

    for(i = 0; i < arr2.length; i++)
    {
        if(maxarr < arr2[i]) // maxarr의 값이 arr2 의 i번째 값보다 작을 때
        {
            maxarr = arr2[i]; // maxarr의 값은 arr2[i]값이 된다.
            console.log(maxarr); // 100 // 1000
            maxarr = i; // 100은 i이다. arr[100]은 3이므로 maxarr = 3이다.
                        // 1000은 i이다. arr[1000]은 3이므로 maxarr = 3이다.
                        // 문제 발생 //
                        // arr2는 [10, -4, 7, 100, -50], [-400, 60, 0, 1000]
                        // 숫자을 제외한 배열이 없으므로 배열의 길이가 다르다.
                        // 최고값이 i번째에 있는지는 arr1에서 답을 구해야한다.
        }
    }
    return maxarr
}
*/

function getMaxValue(arr1) // getMaxValue 함수 선언 후, 매개변수 배열 1개 지정
{
    for(i = 0; i < arr1.length; i++) // arr1의 모든 배열값을 언급
    {
        if(typeof arr1[i] === 'number') // 만약 배열의 타입이 숫자일 때
        {
            if(max < arr1[i]) // 만약 max(0)의 값이 arr1[i]값보다 작다면 
            {
                max = arr1[i]; // max에 arr1[i]의 값을 넣어준다.
                // console.log(max); // 100, 1000
                maxarr = i; // maxarr = 위의 조건이 충족되어 바뀌었을때의 i의 값
            }
        }
    }
    console.log(maxarr); // 모든 과정이 완료 된 후, 최종 i의 값을 출력
}
getMaxValue([10, -4, 7, 100, "hello", -50])
getMaxValue([-400, "world", 60, 0, {}, 1000])


