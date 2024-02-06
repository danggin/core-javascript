/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector

const first = getNode('.first');

// - querySelectorAll

const spanList = getNodes('span');

// - closest

/* 문서 대상 확인 */
// - matches

console.log(first.matches('span')); // target에 selector가 있는지 확인

// - contains

console.log(getNode('h1').contain(getNodes('.second')));
