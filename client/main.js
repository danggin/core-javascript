import {
    getNode,
    getNodes,
    insertLast,
    diceAnimation,
    clearContents,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes(
    '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');

const handleRollingDice = (() => {
    let isClicked = false;
    let stopAnimation;

    return () => {
        if (!isClicked) {
            // 실행
            stopAnimation = setInterval(diceAnimation, 100);
            recordButton.disabled = true;
            resetButton.disabled = true;
        } else {
            // 정지
            clearInterval(stopAnimation);
            recordButton.disabled = false;
            resetButton.disabled = false;
        }

        isClicked = !isClicked;
    };
})();

let count = 0;
let total = 0;

function renderRecordItem() {
    const cube = getNode('#cube');
    const diceValue = +cube.dataset.dice;
    const record = getNode('.recordList > tbody');
    const template = `
    <tr>
        <td>${++count}</td>
        <td>${diceValue}</td>
        <td>${(total += diceValue)}</td>
    </tr>
    `;

    insertLast(record, template);
}

function handleRecord() {
    recordListWrapper.hidden = false;

    renderRecordItem();
}

function handleReset() {
    recordListWrapper.hidden = true;

    clearContents(getNode('tbody'));

    count = 0;
    total = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
