// Get all filter buttons and all projects in every container
const filterButtons = document.querySelectorAll('.filter');
const allProjects = document.querySelectorAll('.first .projects_box, .second .projects_box, .third .projects_box');

// Get containers
const containers = document.querySelectorAll('.projects_container');  // Assuming .container class wraps first, second, and third
let currentContainerIndex = 0;

// Arrows
const nextBtn = document.querySelector(".next"); // or getElementsByClassName("next")[0]
const previousBtn = document.querySelector(".previous"); // or getElementsByClassName("previous")[0]

// Function to filter projects
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the 'active_button' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active_button'));

        // Add 'active_button' to the clicked button
        button.classList.add('active_button');

        // Get the category to filter by
        const category = button.getAttribute('data-name');

        // Show all projects if 'all' is selected
        if (category === 'all') {
            allProjects.forEach(project => project.style.display = 'block');
        } else {
            // Loop through all projects across the containers and show/hide based on category
            allProjects.forEach(project => {
                if (project.getAttribute('data-name') === category) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        }
    });
});

// Function to show container by index
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