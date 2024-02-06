/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress = 'danggin.min@gmail.com';
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
    receivedEmailAddress = 'user@company.io';
} else {
    receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
    emailAddress === undefined || emailAddress === null
        ? 'user@company.io'
        : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';

console.log(receivedEmailAddress);

/* ?? vs. || ----------------------------------------------------------- */

const WIDTH = '10px';
const boolean = false;

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(boolean || WIDTH); // 10px : boolean의 false 값을 false로 보고 WIDTH 값을 반환
console.log(boolean ?? WIDTH); // false : boolean을 정의된 값으로 보고 false를 반환

console.log('' || WIDTH);
console.log('' ?? WIDTH); // 빈문자가 정의되었다고 보고 빈 문자 반환

console.log(0 || WIDTH);
console.log(0 ?? WIDTH); // 0이 정의되었다고 보고 0 반환

// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환
