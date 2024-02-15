import {
    getNode,
    getNodes,
    insertLast,
    diceAnimation,
    clearContents,
    endScroll,
    memo,
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
            stopAnimation = setInterval(diceAnimation, 100);
            recordButton.disabled = true;
            resetButton.disabled = true;
        } else {
            clearInterval(stopAnimation);
            recordButton.disabled = false;
            resetButton.disabled = false;
        }

        isClicked = !isClicked;
    };
})();

let count = 0;
let total = 0;

function creatItem(value) {
    return `
    <tr>
        <td>${++count}</td>
        <td>${value}</td>
        <td>${(total += value)}</td>
    </tr>
    `;
}

function renderRecordItem() {
    // const cube = getNode('#cube');
    const diceValue = +memo('cube').dataset.dice;
    const record = getNode('.recordList > tbody');

    insertLast(record, creatItem(diceValue));

    endScroll(recordListWrapper);
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

    recordButton.disabled = true;
    resetButton.disabled = true;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
