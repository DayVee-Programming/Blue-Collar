class Slider {
  slideIndex = 0;
  intervalId = null;

  constructor(obj) {
    this.slides = document.querySelectorAll(obj.slides);
    this.leftArrows = document.querySelectorAll(obj.leftArrows);
    this.rightArrows = document.querySelectorAll(obj.rightArrows);

    document.addEventListener("DOMContentLoaded", () =>
      this.initializeSlider()
    );
    this.leftArrows.forEach((leftArrow) => {
      leftArrow.addEventListener("click", () => {
        this.prevSlide();
      });
    });
    this.rightArrows.forEach((rightArrow) => {
      rightArrow.addEventListener("click", () => this.nextSlide());
    });
  }

  initializeSlider() {
    if (this.slides.length) {
      this.slides[this.slideIndex].classList.add("show");
      this.intervalId = setInterval(() => this.nextSlide(), 5000);
    }
  }

  showSlide(i) {
    if (i >= this.slides.length) {
      this.slideIndex = 0;
    } else if (i < 0) {
      this.slideIndex = this.slides.length - 1;
    }
    this.slides.forEach((slide) => {
      slide.classList.remove("show");
    });
    this.slides[this.slideIndex].classList.add("show");
  }

  prevSlide() {
    clearInterval(this.intervalId);
    this.slideIndex--;
    this.showSlide(this.slideIndex);
  }

  nextSlide() {
    this.slideIndex++;
    this.showSlide(this.slideIndex);
  }
}

const slider = new Slider({
  slides: ".appointment__main-customer",
  leftArrows: ".appointment__main-customer-arrows-link-left",
  rightArrows: ".appointment__main-customer-arrows-link-right",
});

class Scroller {
  constructor(obj) {
    this.scroller = document.querySelector(obj.scroller);
    this.scrollerList = document.querySelector(obj.scrollerList);

    const scrollerListItems = Array.from(this.scrollerList.children);
    scrollerListItems.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerList.appendChild(duplicatedItem);
      scrollerList.appendChild(duplicatedItem);
    });
  }
}

const scroller = new Scroller({
  scroller: ".clients__scroller",
  scrollerList: ".clients__scroller-list",
});
