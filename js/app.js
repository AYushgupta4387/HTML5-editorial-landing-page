const toggleBtn = document.querySelector(".header__bars-btn");
const sidebar = document.querySelector(".side-bar");

const toggleBtn_2 = document.querySelector(".sb-bars");

toggleBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("side-bar-invisible");
  } else {
    sidebar.classList.add("show-sidebar");
    sidebar.classList.remove("side-bar-invisible");
  }
});

toggleBtn_2.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("side-bar-invisible");
  } else {
    sidebar.classList.add("show-sidebar");
    sidebar.classList.remove("side-bar-invisible");
  }
});
