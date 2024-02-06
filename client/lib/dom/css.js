function getCss(node, prop) {
    if (typeof node === 'string') node = getNode(node);
    if (!(prop in document.body.style))
        throw new Error(
            'getCss 함수의 두 번째 인수는 유효한 CSS 속성이 아닙니다.'
        );

    return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
    if (typeof node === 'string') node = getNode(node);
    if (!(prop in document.body.style))
        throw new Error(
            'setCss 함수의 세 번째 인수는 유효한 CSS 속성이 아닙니다.'
        );
    if (typeof prop !== 'string' || typeof value !== 'string')
        throw new TypeError(
            'setCss함수의 두 번째와 세 번째 인수는 문자 타입 이어야 합니다.'
        );
    if (!value)
        throw new Error('setCss함수의 세 번째 인수는 필수 입력값 입니다.');

    node.style[prop] = value;
}

const css = (node, prop, value) => {
    return !value ? getCss() : setCss();
};
