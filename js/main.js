// scrollProgress
let progress = document.createElement("div");
progress.style.cssText =
  "position:fixed;transition:0.2 all; left:0;bottom:0;height:10px;background-color:#13cbb8";
document.body.appendChild(progress);
window.addEventListener("scroll", () => {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  progress.style.width = `${(window.scrollY / height) * 100}%`;
});
// ScrollToTop
let btnToTop = document.createElement("button");
btnToTop.style.cssText =
  "border:none;font-weight:bolder;outline:none;cursor:pointer;padding:10px 20px;position:fixed;z-index:9999;bottom:15px;right:10px;background-color:#13cbb8";
btnToTop.innerHTML = "<i class='fas fa-long-arrow-alt-up'></i>";
window.onscroll = function () {
  if (window.scrollY > document.documentElement.clientHeight) {
    document.body.append(btnToTop);
  } else {
    btnToTop.remove();
  }
};
btnToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
// Header
let bars = document.querySelector(".bars");
let barsItem = document.querySelectorAll(".list-items li");
bars.onclick = function () {
  let barsSpan = document.querySelectorAll(".bars span");
  barsSpan.forEach((span) => {
    span.classList.toggle("active");
  });
  if (document.querySelector(".list-items").classList.contains("active")) {
    document.querySelector(".list-items").classList.remove("active");
  } else {
    document.querySelector(".list-items").classList.add("active");
  }
};

barsItem.forEach((el) => {
  el.addEventListener("click", (e) => {
    barsItem.forEach((item) => {
      item.classList.remove("active");
    });
    el.classList.add("active");
    document.querySelector(".list-items").classList.remove("active");
    let barsSpan = document.querySelectorAll(".bars span");
    barsSpan.forEach((span) => {
      span.classList.toggle("active");
    });
    if (e.target.dataset.go === "service") {
      window.scrollTo({
        top: document.querySelector("#service").offsetTop,
        behavior: "smooth",
      });
    }
    if (e.target.dataset.go === "portofolio") {
      window.scrollTo({
        top: document.querySelector("#portofolio").offsetTop,
        behavior: "smooth",
      });
    }
    if (e.target.dataset.go === "about") {
      window.scrollTo({
        top: document.querySelector("#about").offsetTop,
        behavior: "smooth",
      });
    }
    if (e.target.dataset.go === "contacts") {
      window.scrollTo({
        top: document.querySelector("#contacts").offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// searvices
