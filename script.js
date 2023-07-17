//event Delegation

document.querySelector(".products").addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
        window.location.href += "/" + event.target.className
    }
})