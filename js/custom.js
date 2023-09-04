// var는 안 쓴다. 리액트가면 괜찮 / let: 변하는 숫자 / 숫자말고는 const

const TOPBANNER = document.querySelector(".TopBanner");

const TOPBANNER_SLIDE = new Swiper(".TopBanner_slide", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  on: {
    slideChangeTransitionStart: function () {
      TOPBANNER_DOTS.forEach((it) => it.classList.remove("on"));
      TOPBANNER_DOTS[this.realIndex].classList.add("on");
    },
  },
});

const TOPBANNER_DOTS = document.querySelectorAll(".TopBanner .dots li");

TOPBANNER_DOTS.forEach((it, idx) => {
  it.addEventListener("click", (e) => {
    e.preventDefault();
    TOPBANNER_SLIDE.slideToLoop(idx);
  });
});

const TOPBANNER_CLOSE = document.querySelector(".TopBanner .close");
TOPBANNER_CLOSE.addEventListener("click", (e) => {
  e.preventDefault();
  TOPBANNER.classList.add("on");
});
