/*
문제 풀이.
*/

/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
*/
// Answer 1.

var a = 29;
var b;

b = a + 2; // 31. (29에 2를 더한 값)
console.log(b);

var c;

c = a % 9; // 2. (29를 9로 나눈 값의 나머지(29 - 27 = 2))
console.log(c);

if( b % c == 1 ){ // 만약 b(31)를 c(2)로 나눈 값의 나머지가 1이면
    console.log("일치합니다."); // 를 출력 - 31을 2로 나누면 1이 나머지 = 문제 해결!
}


/*
Quest 2.
1. 알파벳 ‘a' 부터 'z' 까지 순서대로 console 에 출력되도록 반복문을 작성합니다.
*/
// Answer 2.

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // 알파벳을 모두 배열에 담음
//배열의 크기는 26, index(i)는 0 ~ 25까지

for(i = 0; i < alphabet.length; i++){ // i가 alphabet의 배열의 크기보다 작을 때만(i < 26일때만) for문 반복(0 ~ 25까지 총 26번 반복해서 알파벳이 모두 나오게 됨)
    console.log(alphabet[i]); // alphabet 변수 배열의 i번째를 출력하도록 함 = 문제 해결!
}


console.log('a'.charCodeAt()); //문자열의 코드값을 출력
console.log('b'.charCodeAt()); 
console.log('c'.charCodeAt()); 

console.log(String.fromCharCode(97)); // 캐릭터 코드에서 문자열을 뽑아올 수 있음.
// String.fromCharCode(number); => 'string
// 'string'.sharCodeAt(); => number

var max = 26;
result = '';

for(i = 0; i < max; i++){

    //'a'.charCodeAt() + i; // 97, 98 ,99, 100...
    //String.fromCharCode('a'.charCodeAt() + i); // 'a', 'b', 'c', 'd'...
   // console.log(String.fromCharCode('a',charCodeAt() + i)); 
    result += String.fromCharCode('a'.charCodeAt() + i);
}

console.log(result);

/*
Quest 3.
1. 숫자 '1' 부터 '50' 까지 순서대로 console 에 출력되도록 반복문을 작성하고 출력 시 해당 값의 짝/홀수 여부를 함께 표시합니다.

----------
console 에 출력  예시 : 1은 홀수!
----------
*/
// Answer 3.

// 홀수 판별법 : 숫자에 2를 나눠서 나머지가 없으면 짝수, 1이 남으면 홀수

for(i = 1; i <= 50; i++){ // i가 50과 같거나 작을 때만 for문 반복
   
    if(i % 2 == 1){ // 2를 나눴을 때 1이 남으면 홀수
         console.log(i + " 은(는) 홀수!"); 
    }
    else{ // 그 외의 상황에서는 모두 짝수므로 짝수라고 출력. 
        console.log(i + " 은(는) 짝수!"); //문제 해결!
    }
   
}



