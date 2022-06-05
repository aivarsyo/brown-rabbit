import sliderInit from "./slider";

function one(q) {
  return document.querySelector(q);
}

export default function populateSlider(data, slidersData) {
  const carouselContainer = one(".carousel");

  data.slides.forEach((slide) => {
    const carouselCell = `<div class="carousel__cell">
      <img src="./assets/images/coffee-pics/${slide.photo}" alt="coffee">
      </div>`;
    carouselContainer.insertAdjacentHTML("afterbegin", carouselCell);
  });
  sliderInit(slidersData);
}
