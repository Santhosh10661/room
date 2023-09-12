let nxtBtn = document.querySelector(".arrow-nxt");
let preBtn = document.querySelector(".arrow-pre");
let nxtBtnM = document.querySelector(".arrow-nxt-m");
let preBtnM = document.querySelector(".arrow-pre-m");
let hamburg = document.querySelector(".hamburg");
let closeBtn = document.querySelector(".close");
let menu = document.querySelector(".menu");
let currentSlide = 1;
let currentSlideMob = 1;

nxtBtn.addEventListener("click", () => {
  if (currentSlide === 3) {
    document.querySelector(`.imgsl-${currentSlide}`).style.display = "none";
    document.querySelector(`.parasl-${currentSlide}`).style.display = "none";
    currentSlide = 1;
    document.querySelector(`.imgsl-${currentSlide}`).style.display = "flex";
    document.querySelector(`.parasl-${currentSlide}`).style.display = "flex";
  } else {
    document.querySelector(`.imgsl-${currentSlide}`).style.display = "none";
    document.querySelector(`.parasl-${currentSlide}`).style.display = "none";
    currentSlide++;
    document.querySelector(`.imgsl-${currentSlide}`).style.display = "flex";
    document.querySelector(`.parasl-${currentSlide}`).style.display = "flex";
  }
});

preBtn.addEventListener("click", () => {
  if (currentSlide === 1) {
    document.querySelector(`.imgsl-${currentSlide}`).style.display = "none";
    document.querySelector(`.parasl-${currentSlide}`).style.display = "none";
    currentSlide = 3;
    document.querySelector(`.imgsl-${currentSlide}`).style.display = "flex";
    document.querySelector(`.parasl-${currentSlide}`).style.display = "flex";
  } else {
    document.querySelector(`.imgsl-${currentSlide}`).style.display = "none";
    document.querySelector(`.parasl-${currentSlide}`).style.display = "none";
    currentSlide--;
    document.querySelector(`.imgsl-${currentSlide}`).style.display = "flex";
    document.querySelector(`.parasl-${currentSlide}`).style.display = "flex";
  }
});

nxtBtnM.addEventListener("click", () => {
  if (currentSlideMob === 3) {
    document.querySelector(`.imgslM-${currentSlideMob}`).style.display = "none";
    document.querySelector(`.paraslM-${currentSlideMob}`).style.display =
      "none";
    currentSlideMob = 1;
    document.querySelector(`.imgslM-${currentSlideMob}`).style.display = "flex";
    document.querySelector(`.paraslM-${currentSlideMob}`).style.display =
      "flex";
  } else {
    document.querySelector(`.imgslM-${currentSlideMob}`).style.display = "none";
    document.querySelector(`.paraslM-${currentSlideMob}`).style.display =
      "none";
    currentSlideMob++;
    document.querySelector(`.imgslM-${currentSlideMob}`).style.display = "flex";
    document.querySelector(`.paraslM-${currentSlideMob}`).style.display =
      "flex";
  }
});

preBtnM.addEventListener("click", () => {
  if (currentSlideMob === 1) {
    document.querySelector(`.imgslM-${currentSlideMob}`).style.display = "none";
    document.querySelector(`.paraslM-${currentSlideMob}`).style.display =
      "none";
    currentSlideMob = 3;
    document.querySelector(`.imgslM-${currentSlideMob}`).style.display = "flex";
    document.querySelector(`.paraslM-${currentSlideMob}`).style.display =
      "flex";
  } else {
    document.querySelector(`.imgslM-${currentSlideMob}`).style.display = "none";
    document.querySelector(`.paraslM-${currentSlideMob}`).style.display =
      "none";
    currentSlideMob--;
    document.querySelector(`.imgslM-${currentSlideMob}`).style.display = "flex";
    document.querySelector(`.paraslM-${currentSlideMob}`).style.display =
      "flex";
  }
});

hamburg.addEventListener("click", () => {
  menu.style.display = "flex";
  document.body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.style.overflow = "scroll";
});
