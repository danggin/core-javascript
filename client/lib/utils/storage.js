const { localStorage: storage } = window;

export function setStorage(key, value) {
    return new Promise((resolve, reject) => {
        if (typeof key === 'string') {
            storage.setItem(key, JSON.stringify(value));
            resolve();
        } else {
            reject({ messge: 'key는 문자 타입이어야 합니다.' });
        }
    });
}

export function getStorage(key) {
    return new Promise((resolve, reject) => {
        if (typeof key === 'string') {
            resolve(JSON.parse(storage.getItem(key)));
        } else {
            reject({ messge: 'key는 문자 타입이어야 합니다.' });
        }
    });
}

// await setStorage('user', { name: '선범', age: '32' });
// getStorage('user').then((res) => {
//     console.log(res);
// });

// storage.removeItem('user');
// storage.clear();

export function deleteStorage(key) {
    return new Promise((resolve, reject) => {
        !key ? storage.clear() : storage.removeItem(key);
        resolve();
    });
}
