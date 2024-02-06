/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[4];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(4, -1);
let subString = message.subString(2, 5);
// let subStr;

// 문자열 포함 여부 확인
let indexOf;

function checkBrowser() {
    const agent = window.navigator.userAgent.toLowerCase();
    let browserName;

    switch (true) {
        case agent.indexOf('edge') > -1:
            browserName = 'MS Edge';
            break;
        case agent.indexOf('chrome') > -1 && !!window.chrome:
            browserName = 'chrome';
            break;
        case agent.indexOf('safari') > -1:
            browserName = 'Apple Safari';
            break;
        case agent.indexOf('firefox') > -1:
            browserName = 'FireFox';
            break;
        case agent.indexOf('trident') > -1:
            browserName = 'IE';
            break;
    }

    return browserName;
}

let lastIndexOf;
let includes = message.includes('Less');
let startsWith;
let endsWith;

// 공백 잘라내기

let str = '          a    b       c         d        ';

// let trimLeft;
// let trimRight;
let trim = str.trim();

let reg = str.replace(/\s*/g, '');

function mormalText(string) {
    return string.replace(/\s*/g, '');
}

// 텍스트 반복
let repeat = message.repeat(4);

// 대소문자 변환
let toLowerCase;
let toUpperCase;

function toCamelCase(string) {
    return string.replace(/(\s|-|_)+./g, ($1) =>
        $1
            .trim()
            .replace(/(-|_)+/, '')
            .toUpperCase()
    );
}

function toPascalCase(string) {
    let name = toCamelCase(string);
    return name[0].toUpperCase() + name.slice(1);
}

function truncate(text, limit = 100, ellipsis = '...') {
    return `${text.slice(0, limit).trim()}${ellipsis}`;
}

// 기타

let padStrat;
let padEnd;
