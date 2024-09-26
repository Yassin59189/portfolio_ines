const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".box_container .box");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const sections = document.querySelectorAll(".projects_container .box_container");


const filterCards = (e) => {
    document.querySelector(".active_button").classList.remove("active_button");
    e.target.classList.add("active_button");
  
    cards.forEach((card) => {
      card.classList.add("hide");
      if (e.target.dataset.name==="social media") {
        if(card.dataset.name==="social media") {
            card.classList.remove("hide")
            console.log("dsqdqsdqsdqs")
        }
      }

      if (e.target.dataset.name === "all") {
        if (card.classList.contains("tohide")) {
          card.classList.add("hide");
   
        }
        else {
            card.classList.remove("hide")
        }
      }

      if (e.target.dataset.name === card.dataset.name) {

            card.classList.remove("hide");
            
          
      }
  
      
    });
  };


  let currentSection = 0;

function showSection(index) {
  sections.forEach((section, i) => {
    section.classList.add("hide");
    if (i === index) {
      section.classList.remove("hide");
    }
  });
}



nextBtn.addEventListener("click", () => {
  if (currentSection < sections.length - 1) {
    currentSection++;
    showSection(currentSection);
    console.log(currentSection)
  }
});

previousBtn.addEventListener("click", () => {
  if (currentSection > 0) {
    currentSection--;
    showSection(currentSection);
  }
});

showSection(currentSection);








filterButtons.forEach((button) => button.addEventListener("click", filterCards));