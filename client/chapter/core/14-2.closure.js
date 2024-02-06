function earth() {
    let water = true;

    let apple = {
        founder: 'Steve Jobs',
        ceo: 'Tim Cook',
        product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
    };

    return function (value) {
        water = value;
        // return apple
    };
}

const UFO = earth();

UFO(0);

const first = document.querySelector('.first');

const handleClick = (() => {
    let isClicked = false;

    return () => {
        if (!isClicked) {
            document.body.style.background = 'rgb(174, 229, 174)';
        } else {
            document.body.style.background = 'none';
        }

        isClicked = !isClicked;
    };
})();

//first.addEventListener('click', handleClick());
first.addEventListener('click', handleClick);

function useState(initValue) {
    let value = initValue;

    function read() {
        return value;
    }

    function write(newValue) {
        value = newValue;
    }

    return [read, write];
}

const [state, setState] = useState(111);
