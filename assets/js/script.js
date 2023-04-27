const activeLink = document.querySelector(".active-link");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
   link.addEventListener("click", (e) => {
      activeLink.classList.remove("active-link");
      link.classList.add("active-link");
   });
   }
);