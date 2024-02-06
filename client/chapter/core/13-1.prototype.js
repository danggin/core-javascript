/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
    legs: 4,
    tail: true,
    stomach: [],
    get eat() {
        return this.stomach;
    },
    set eat(food) {
        this.prey = food;
        this.stomach.push(food);
    },
};

const tiger = {
    pattern: '호랑이무늬',
    hunt(target) {
        this.prey = target;
        return `${target}에게 조용히 접근합니다.`;
    },
    __proto__: animal,
};

// tiger.__proto__ = animal;

const 백두산호랑이 = {
    color: 'white',
    name: '백랑이',
    __proto__: tiger,
};

const 용마산호랑이 = {
    color: 'orange',
    name: '선돌이',
    __proto__: tiger,
};

용마산호랑이.hunt = '블루베리';
용마산호랑이.prey = '블루베리';
용마산호랑이.eat = '딸기';

console.log(백두산호랑이.eat);

// 생성자 함수

function Animal() {
    this.legs = 4;
    this.tail = true;
    this.stomach = [];

    this.getEat = function () {
        return this.stomach;
    };

    this.setEat = function (food) {
        this.prey = food;
        this.stomach.push(food);
    };
}

const a = new Animal();

function Tiger(name) {
    this.name = name;
    this.patern = '호랑이무늬';
    this.hunt = function (target) {
        this.prey = target;
        return `${target}에게 천천히 접근한다.`;
    };
}

Tiger.prototype = a;

const 한라산호랑이 = new Tiger('한돌이');
console.log(한라산호랑이.legs);
