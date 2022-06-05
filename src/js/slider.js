import Flickity from "flickity";

function one(q) {
  return document.querySelector(q);
}

export default function sliderInit(slidersData) {
  const sliderContainer = one(".carousel");
  const flkty = new Flickity(sliderContainer, {
    // options
    contain: true,
    wrapAround: true,
    pageDots: false,
    on: {
      ready: function () {
        const quoteText = one(".quoteText");
        quoteText.textContent = slidersData.slides[0].quote;
      },
      change: function (index) {
        const quoteText = one(".quoteText");
        quoteText.classList.toggle("animateQuoteText");
        setTimeout(() => {
          quoteText.textContent = slidersData.slides[index].quote;
          quoteText.classList.toggle("animateQuoteText");
        }, 200);
      },
    },
  });
}
