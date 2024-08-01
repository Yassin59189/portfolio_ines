const filterButtons = document.querySelectorAll(".filters button")
const cards = document.querySelectorAll(".box_container .box")
const email = document.getElementById("emailBtn")

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

function scrollToBottom () {
    var height = document.body.scrollHeight
    window.scroll(0, height)
}

window.addEventListener('scroll', checkScroll)

function checkScroll(){
    const scrollIcon = document.querySelector(".scroll_to_bottom")
    var height = document.documentElement.scrollHeight
    var current = window.scrollY+window.innerHeight
    if (current >= height) {
        scrollIcon.classList.add("hide")
    }
    else {
        scrollIcon.classList.remove("hide")
    }
}

emailBtn.addEventListener("click", function() {
    window.location.href = "mailto:ines.mlaouhi.pro@gmail.com"
})