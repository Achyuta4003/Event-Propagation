//Q: Create a modal which closes by clicking on negative space

const container = document.querySelector(".moodalContainer")
const button = document.querySelector(".modalButton")

button.addEventListener("click", () => {
    toggleModal(true)
})
container.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className === "moodalContainer") {

        toggleModal(false)
    }
})

function toggleModal(toggle) {
    container.style.display = toggle ? "grid" : "none"
}