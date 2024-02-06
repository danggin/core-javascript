/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?

// if 문(statement)

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('영화 봤니?');

  // 영화 볼거니?

  if (!didWatchMovie) {
    let goingToWatchMovie = confirm('영화 볼거야?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 볼거니?');

      if (withWho === '너') {
        console.log('어머..☺️');
      } else if (withWho === '엄마') {
        console.log('효자구나!');
      } else {
        console.log('내가 아니네..?🤔');
      }
    } else {
      console.log('꼭 봐 재밌어');
    }
  } else {
    console.log('어 나 봤어..');
  }
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';
let message = didWatchMovie.includes('yes')
  ? '재밌더라'
  : goingToWatchMovie.includes('yes')
    ? '너무 재밌겠다!'
    : '난 별로인데...';

console.log(message);

// 멀티 조건부 연산자 식

function render(node, isActive) {
  const template = /* html */ `
      <div>${isActive ? '안녕!!!!' : '잘가~~!!!'}</div>
    `;
  node.insertAdjacentHTML('beforeend', template);
}

/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;

console.log(AorB);

// 논리합 할당 연산자 Logical or assignment
// a = a || b;   →   a ||= b;

// 부정 연산자
let reverseValue = !value;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
// [] : 빈 배열이라도 베열은 생성되는 순간 값이 있다고 판단되기 때문에 true
console.log(whichFalsy); // { thisIsFalsy: false }

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruth: true };
console.log(whichTruthy); // [2, 3].length = 2
