// Q:Create Debounce() Pollyfill Implementation 


const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_press");
const count = document.querySelector(".increment_count");


let pressCount = 0;
let triggerCount = 0;


// Debounce() Pollyfill
const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            cb(...args)
        }, d)
    }
}

const debounceCount = myDebounce(() => {
    count.innerHTML = ++triggerCount;
}, 800)


btn.addEventListener('click', () => {
    btnPress.innerHTML = ++pressCount;
    debounceCount()
})
