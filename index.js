document.addEventListener("DOMContentLoaded", () => {
  const menuicon = document.querySelector(".menu");
  const navmenu = document.querySelector(".right");
  const showimage = document.querySelector(".dropdown");
  const heroimage = document.querySelector(".right-hero");

  let isSmallScreen = window.innerWidth <= 850;

  function toggleHeroImage() {
    if (window.innerWidth <= 850) {
      heroimage.style.display = "none";
      showimage.style.display = "block";

      showimage.addEventListener("click", showHideImage);
    } else {
      heroimage.style.display = "flex";
      showimage.style.display = "none";
      showimage.removeEventListener("click", showHideImage);
    }
  }

  function showHideImage() {
    if (heroimage.style.display === "none") {
      heroimage.style.display = "flex";
      showimage.innerText = "Hide image";
    } else {
      heroimage.style.display = "none";
      showimage.innerText = "Show image";
    }
  }

  toggleHeroImage();

  window.addEventListener("resize", () => {
    if (
      (window.innerWidth <= 850 && !isSmallScreen) ||
      (window.innerWidth > 850 && isSmallScreen)
    ) {
      isSmallScreen = window.innerWidth <= 750;
      toggleHeroImage();
    }
  });

  menuicon.addEventListener("click", () => {
    menuicon.classList.toggle("clicked");
    const currentHeight = window.getComputedStyle(navmenu).height;

    if (currentHeight === "0px" || currentHeight === "0") {
      navmenu.style.height = "100vh";
    } else {
      navmenu.style.height = "0px";
    }
  });
});

window.addEventListener("mousemove", (e) => {
  const mouse = document.querySelector(".mouse-background");
  const posX = e.clientX;
  const posY = e.clientY;

  mouse.style.left = `${posX}px`;
  mouse.style.top = `${posY}px`;

  mouse.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 350, fill: "forwards" }
  );
});

const links = document.querySelectorAll("#mouse-big");
const mouse = document.querySelector(".mouse-background");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    mouse.style.width = "40px";
    mouse.style.height = "40px";
  });

  link.addEventListener("mouseleave", () => {
    mouse.style.width = "30px";
    mouse.style.height = "30px";
  });
  
});

document.querySelectorAll('.project-card').forEach((project) => {
  project.addEventListener('click', function () {
    document.querySelectorAll('.project-card').forEach(p => p.classList.remove('enlarged'));
    project.classList.add('enlarged');
  });

  
  const closeButton = project.querySelector('.close-btn');
  closeButton.addEventListener('click', function (event) {
    event.stopPropagation();
    project.classList.remove('enlarged');
  });
  project.querySelector('.thumbnail img').addEventListener('click', function (event) {
    event.stopPropagation();
  });
});



const projects = document.querySelectorAll('.project-card');
const projectHeading = document.querySelector('.project-heading')
const skillHeading = document.querySelector('.skill-heading')
const testimonialHeading = document.querySelector('.testimonial-heading')
const col1 = document.querySelector('.col-1')
const col2 = document.querySelector('.col-2')
const tCard = document.querySelectorAll('.testimonial-card')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove('in-view')
        }
    });
}, { threshold: 0.3 }); 

projects.forEach(projects => {
    observer.observe(projects);
});
observer.observe(projectHeading)
observer.observe(skillHeading)
observer.observe(col1)
observer.observe(col2)
observer.observe(testimonialHeading)
tCard.forEach(tcard => {
  observer.observe(tcard)
})