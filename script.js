

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about");
    const projectsSection = document.querySelector("#projects"); // Add this line
    let lastScrollPosition = window.scrollY;

    window.addEventListener("scroll", function () {
        const aboutScrollPosition = aboutSection.getBoundingClientRect().top;
        const projectsScrollPosition = projectsSection.getBoundingClientRect().top; // Add this line
        const windowHeight = window.innerHeight;

        if (aboutScrollPosition < windowHeight * 0.75) {
            aboutSection.style.opacity = 1;
        } else {
            aboutSection.style.opacity = 0;
        }

        if (projectsScrollPosition < windowHeight * 0.75) { // Add this block
            projectsSection.style.opacity = 1;
        } else {
            projectsSection.style.opacity = 0;
        }

        if (window.scrollY < lastScrollPosition) {
            aboutSection.style.opacity = 0;
            projectsSection.style.opacity = 0; // Add this line
        }

        lastScrollPosition = window.scrollY;
    });
});
