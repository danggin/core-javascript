import {
    clearContents,
    getNode,
    getRandom,
    isNumericString,
    addClass,
    removeClass,
    toggleClass,
    showAlert,
    shake,
    copy,
} from './lib/index.js';

import jujeobData from './data/data.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function handleJujeob(e) {
    e.preventDefault();

    const name = nameField.value;
    const list = jujeobData(name);
    const pick = list[getRandom(list.length)];

    if (!name || name.replace(/\s*/g, '') === '') {
        showAlert('.alert-error', '이름을 입력해 주세요.', 2000);
        shake.restart();
        return;
    }
    if (!isNumericString(name)) {
        showAlert('.alert-error', '제대로 된 이름을 입력해 주세요.', 2000);
        shake.restart();
        return;
    }

    result.textContent = '';
    // clearContents('.result');
    result.insertAdjacentHTML('beforeend', pick);
}

function handleCopy() {
    const text = this.textContent;
    if (!nameField.value) return;
    copy(text).then(() => {
        showAlert('.alert-success', '클립보드 복사 완료 !');
    });
}

submit.addEventListener('click', handleJujeob);
result.addEventListener('click', handleCopy);
