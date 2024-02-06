/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
    let total = 0;

    // for문
    // for (let i = 0; i < arguments.length; i++) {
    //     total += arguments[i];
    // }

    // for of
    // for (let value of arguments) {
    //     total += value;
    // }

    // 빌려쓰기
    // Array.prototype.forEach.call(arguments, function (item) {
    //     total += item;
    // });

    // arguments의 부모인 객체Object를 배열로 바꿔치기
    // arguments.__proto__ = Array.prototype;
    // arguments.forEach(function (item) {
    //     total += item;
    // });

    // arguments 객체(유사배열) => 진짜 배열
    //const arr = Array.from(arguments);
    // // const arr = Array.prototype.slice.call(arguments) // ie에서는 이 코드로 사용
    const arr = [...arguments]; // spread syctax
    // arr.forEach(function (item) {
    //     total += item;
    // });

    // 화살표 함수
    //arr.forEach((item) => (total += item));

    // total = arr.reduce(function (acc, cur) {
    //     return acc + cur;
    // }, 0);

    // return arr.reduce((acc, cur) => acc + cur);

    const map = arr.map((a) => a * 2);
    console.log(map);

    const filter = arr.filter((a) => a < 50);
    console.log(filter);

    // return total;
};

const result = calculateTotal(10, 20, 30, 40, 50, 60, 70, 80);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (state, succes, fail) {
    console.log(succes());

    if (state) {
        return succes();
    } else {
        return fail();
    }
};

const call = callbackFunctionExpression(
    true,
    function () {
        return '성공';
    },
    function () {
        return '실패';
    }
);

function movePage(url, success, fail) {
    // if(url.includes('www')){
    //   success(url)
    // }else{
    //   fail()
    // }

    url.includes('www') ? success(url) : fail();
}

// movePage(
//   'https://www.naver.com',
//   url => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
//   ()=> console.error('잘못된 url 정보를 입력하셨습니다.')
// )

movePage(
    'https://www.naver.com',
    function (url) {
        console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);

        setTimeout(() => {
            // window.location.href = url
        }, 3000);
    },
    function () {
        console.error('잘못된 url 정보를 입력하셨습니다.');
    }
);
// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

const MASTER = (function () {
    let uuid = 'sdgkjdgisj!wegjskljs';

    return {
        getKey() {
            return uuid;
        },
        setKey(value) {
            uuid = value;
        },
    };
})();

console.log(MASTER.getKey());
