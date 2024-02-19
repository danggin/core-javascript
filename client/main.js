import {
    getNode as $,
    setStorage,
    getStorage,
    deleteStorage,
    clearContents,
} from './lib/index.js';

const textField = $('#textField');

const handleTextField = (e) => {
    const value = e.currentTarget.value;

    setStorage('text', value);
};

textField.addEventListener('input', handleTextField);

// function init() {
//     console.log('init');
// }

// window.addEventListener('DOMContentLoaded', init);

(() => {
    getStorage('text').then((res) => {
        textField.value = res;
    });
})();

const clear = $('[data-name="clear"]');

const handleClear = () => deleteStorage('text').then(clearContents(textField));

clear.addEventListener('click', handleClear);
