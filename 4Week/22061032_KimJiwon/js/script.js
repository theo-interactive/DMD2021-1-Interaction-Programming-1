// Q1.

// function compareNumbers(a, b) {

// if (typeof b === 'undefined')
// {
//     console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
// }
// else if (a >= b)
// {
//     console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
// }
// else if (a < b)
// {
//     console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
// }
// }

// compareNumbers(10);
// compareNumbers(20, 10);
// compareNumbers(10, 20);

// --> '두번째 매개변수의 값을 찾을 수 없습니다.' 출력.
// --> '첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.' 출력.
// --> '첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.'  출력.

// ** 처음 했을 때 if (typeof b === 'undefined')를 if (typeof b === undefined)로 써서 값이 제대로 안 나옴.




// Q2.

var b = 1;
var c = 1;
function getTotal(n, s){

    var r;

    if (s === "add"){
        for (i = 0; i <= n; i++){
            i = i + 1;
            b = i + b;
        }
        r = b;
    }
    else if (s === "multiply"){
        for (i = 0; i <= n; i++){
            i = i + 1;
            c = c * i;
        }
        r = c;
    }
    else {
        r = 0;
    }
    return r;
}


var re = getTotal(5, "add") // --> 10 출력.
console.log(re);
var re = getTotal(10, "add") // --> 46 출력.
console.log(re);
var re = getTotal(5, "multiply") // --> 15 출력.
console.log(re);
var re = getTotal(10, "multiply") // --> 155925 출력.
console.log(re);
var re = getTotal(100) // --> 0 출력.
console.log(re);
// 마지막 빼고 다 다르게 나옴.
// 잘 모르겠습니다ㅜㅜ





// Q3.

// var _cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
// _cars.reverse(); // 반대로 정렬.
// console.log(_cars);

// --> ["Benz", "Volvo", "Audi", "Tesla"] 출력



// Q4.

// function searchIndex(a,n) {
    
//     for (i = 0; i < a.length; i++){  // i가 배열 a의 길이보다 작을때까지 반복
//         if (a[i] === n){   // a[i]의 값이 n과 같으면
//             console.log(i);  // i(순서)를 출력
//         }
        
//     }
// }
// searchIndex([8, 10, 13, 30, 50], 30);

// --> 3 출력.




// Q5. 

// function checkType(a){
//     var sum = [];
//     for (i = 0; i < a.length; i++){
        
//         sum += typeof a[i];
//     }
//     console.log(sum);
// }
// checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]);

// --> numberstringstringobjectobject 출력.
// ** 배열로 만들어야 함..


// function checkType(a){
//     var sum = [];
//     for (i = 0; i < a.length; i++){

//         if(i === 0) {
//             sum += '[\'';   // 처음에 [' 출력
//         }
        

//         sum += typeof a[i];  // 배열 안의 원소들의 타입들을 쭉 늘어놓음


//         if(i < a.length) {  // 쉼표 전에 ' 넣기
//             sum += '\'';
//         }


//         if(i < a.length - 1) {  // 쉼표와 띄어쓰기 넣기
//             sum += ', ';
//         }

//         if(i < a.length - 1) {   // 쉼표 뒤에 ' 넣기
//             sum += '\'';
//         }
        

//         if (i === a.length - 1) {  // 마지막에 중괄호 닫기
            
//             sum += ']';
//         }
        
//     }

//     console.log(sum);

// }

// checkType([10, 'Hello', 'World', {name : 'rh'}, [10, 20]]);


// --> ['number', 'string', 'string', 'object', 'object'] 출력.


// Q6.

// function getMaxValue(m){

// var v = -10000000000000;
// var r;

//     for (i = 0; i < m.length; i++)  // 원소 전체 비교
//     {
//         if (typeof m[i] === 'number')  // 원소의 타입이 숫자인 경우
//         {
//             if (m[i] > v)  // 원소가 v보다 클 경우
//             {
//                 v = m[i];  // 더 큰 원소를 v에 저장(초기값이 엄청 낮기 때문에 처음에는 첫번째 원소 저장)
//                 r = i;  // 순서를 r에 저장
//             }
//         }
//     }
//         return r;  // 순서값을 반환
//     }

// var fin = getMaxValue([10, -4, 7, 100, "hello", -50])
// console.log(fin); // --> 3 출력

// var fin = getMaxValue([-400, "world", 60, 0, {}, 1000])
// console.log(fin); // --> 5 출력


// return 부분이 좀 어렵습니다...

