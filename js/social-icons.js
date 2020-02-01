const toggleBtn = document.querySelector(".social-container .toggle-icon");
const toggleContainer = () => {
  const socialIcons = document.querySelector(".social-icons");
  var compStyle = window.getComputedStyle(socialIcons);
  var prop = compStyle.getPropertyValue("opacity");
  if (prop == 0) {
    socialIcons.style.transform = "translateX(0)";
    socialIcons.style.opacity = "1";
    socialIcons.style.transition = "1.5s";
  } else {
    socialIcons.style.opacity = "0";
    socialIcons.style.transform = "translateX(5%)";
  }
};
toggleBtn.addEventListener("click", toggleContainer);
