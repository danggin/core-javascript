/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = (data) => Array.isArray(data);

/* 요소 순환 ---------------------------- */

const people = [
    {
        id: 0,
        name: '가희',
        age: 14,
        job: '명탐정코난 범인',
        imageSrc: 'Rrgjsr',
    },
    {
        id: 1,
        name: '보미',
        age: 64,
        job: '짜요짜요 마케터',
        imageSrc: 'Osdigj',
    },
    {
        id: 2,
        name: '태희',
        age: 13,
        job: '삐돌이',
        imageSrc: 'OSgjsks',
    },
    {
        id: 3,
        name: '원명',
        age: 81,
        job: '이도령',
        imageSrc: 'Rsogo3z',
    },
];

// forEach

const nameArray = [];
people.forEach((item, index) => {
    nameArray.push(item.name);
});

console.log(nameArray);

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map 새로운 배열을 반환

const job = people.map((item, index) => item.job);

const card = people.map((item, index) => {
    return /* html */ `
    <div class=userCard>
        <span>이름 : ${item.name}</span>
        <span>나이 : ${item.age}</span>
        <span>직업 : ${item.job}</span>
    </div>
    `;
});

card.forEach((item) => document.body.insertAdjacentHTML('beforeend', item));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const find = people.find((item) => {
    return item.job === '삐돌이';
});

console.log(find);

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

const underAge = people.filter((item) => {
    return item.age < 30;
});

console.log(underAge);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

console.log(totalAge);

const tem = people.reduceRight((htmlCode, cur) => {
    return htmlCode + `<div>${cur.name} : ${cur.age}</div>`;
}, '');

document.body.insertAdjacentHTML('beforeend', tem);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '원명 가희 소정 설아 경민 진욱';

// split

const stringToArray = str.split();
console.log(stringToArray);

// join

const arrayToString = stringToArray.join(',');
console.log(arrayToString);
