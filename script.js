const div = document.querySelector("div")
const form = document.querySelector("form")
const button = document.querySelector("button")


div.addEventListener("click", function (event) {
    event.stopPropagation()
    alert("div")
})


form.addEventListener("click", function (event) {
    event.stopPropagation()
    alert("form")
})


button.addEventListener("click", function (event) {
    event.stopPropagation()

    alert("button")
})