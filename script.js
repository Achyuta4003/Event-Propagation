// Q:create a button UI and add throttle as follow
//     -->Show button press X time, Every time button is pressed
//     -->Increase Trigger Y time, count after 800ms of throttle


const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_press");
const count = document.querySelector(".increment_count");


let pressCount = 0;
let triggerCount = 0;

const throttlingCount = _.throttle(() => {
    count.innerHTML = ++triggerCount;
}, 800)


btn.addEventListener('click', () => {
    btnPress.innerHTML = ++pressCount;
    throttlingCount()
})
