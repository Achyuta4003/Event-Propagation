// Q: event.target vs event.currentTarget vs this.target
const div = document.querySelector("div")
const form = document.querySelector("form")
const button = document.querySelector("button")


div.addEventListener("click", func)


form.addEventListener("click", func)


button.addEventListener("click", func)

//--> event.currentTarget

// function func(event) {
//     alert("event.currentTarget" + event.currentTarget.tagName)
// }

//--.event.currentTarget
// function func(event) {
//     alert("event.target" + event.target.tagName)
// }


// --> this.tagname
function func(event) {
    alert("this.target" + this.tagName)
}