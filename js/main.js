const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector("#close");

const siteNav = document.querySelector(".site-nav");
const body = document.querySelector("#body");

openBtn.addEventListener("click", () => {
  body.classList.add("scroll-none");
  siteNav.classList.add("show");
  closeBtn.classList.remove("none", "close");
  openBtn.classList.add("none");
});

closeBtn.addEventListener("click", () => {
  body.classList.remove("scroll-none");
  siteNav.classList.remove("show");
  closeBtn.classList.add("none");
  openBtn.classList.remove("none");
});

//
const img = document.getElementById("img");

function reImg() {
  if (screen.width <= 1000) {
    console.log((img.src = "../pictures/png/bg-phone-short.png"));
  } else {
    console.info("nothing");
  }

  // console.log(screen);
}

reImg();
