const link = document.querySelectorAll(".portofolio-nav ul li");

function portAddActive() {
  removePortActive();
  this.classList.add("portofolio-active");
  console.log(this);
}

removePortActive = () => {
  link.forEach(item => item.classList.remove("portofolio-active"));
};
link.forEach(item => item.addEventListener("click", portAddActive));
portAddActive();
