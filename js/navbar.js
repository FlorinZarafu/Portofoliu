const menu = document.querySelectorAll(".navigation ul li");
const container = document.querySelectorAll(".content");

removeActive = () => {
  menu.forEach(item => item.classList.remove("active"));
};
function changeActive() {
  removeActive();
  removeShow();
  this.classList.add("active");
  const tabs = document.querySelector(`#${this.id}-content`);
  tabs.classList.add("show");
}

removeShow = () => {
  container.forEach(item => item.classList.remove("show"));
};

menu.forEach(item => item.addEventListener("click", changeActive));
