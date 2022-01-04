const counter = {
    counterValue: 0,

    increment () {
        this.counterValue += 1;      
    },

decrement () {
    this.counterValue -= 1;
}
};


const volumeBtn = document.querySelector ('[data-action="increment"]');
const minBtn = document.querySelector ('[data-action="decrement"]');
const valueEl = document.querySelector ('#value');



volumeBtn.addEventListener ('click', function () {
    counter.increment();
    valueEl.textContent = counter.counterValue;

});


minBtn.addEventListener ('click', function () {
    counter.decrement();
    valueEl.textContent = counter.counterValue;

});
