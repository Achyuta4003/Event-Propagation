// Q:Create Throttle() Pollyfill Implementation 


const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_press");
const count = document.querySelector(".increment_count");


let pressCount = 0;
let triggerCount = 0;


// Throttle() Pollyfill
const myThrottle = (cb, d) => {
    let last = 0;

    return (...args) => {
        let now = new Date().getTime();
        if (now - last < d) return;
        last = now;

        return cb(...args)
    }
}

const throttleCount = myThrottle(() => {
    count.innerHTML = ++triggerCount;
}, 800)


btn.addEventListener('click', () => {
    btnPress.innerHTML = ++pressCount;
    throttleCount()
})
