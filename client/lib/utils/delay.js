import { isNumber, isObject } from './typeOf.js';

// mixin

// 기존 객체  +  전달 받은 객체

const defaultOptions = {
    shouldReject: false,
    timeout: 1000,
    successMessage: '성공입니다.',
    errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
    let config = { ...defaultOptions };

    if (isNumber(options)) {
        config.timeout = options;
    }

    if (isObject(options)) {
        config = { ...defaultOptions, ...options };
    }

    let { shouldReject, successMessage, errorMessage, timeout } = config;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!shouldReject) {
                resolve(successMessage);
            } else {
                reject(errorMessage);
            }
        }, timeout);
    });
}
