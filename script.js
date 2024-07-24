const filterButtons = document.querySelectorAll(".filters button")
const cards = document.querySelectorAll(".projects_page_container_grid .projects_page_box")

const filterCards = (e) => {
    document.querySelector(".active_button").classList.remove("active_button")
    e.target.classList.add("active_button")

    cards.forEach(card => {
        card.classList.add("hide")
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide")
        }
    })
}

filterButtons.forEach(button => button.addEventListener("click", filterCards))