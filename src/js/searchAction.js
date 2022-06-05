import openModal from "./openModal";

function one(q) {
  return document.querySelector(q);
}
function all(q) {
  return document.querySelectorAll(q);
}

export default function searchAction(articlesData) {
  const searchIcon = one(".headerRight__search");
  const searchBck = one(".search");
  const searchContent = one(".search__content");

  searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle("openSearch");
    // because header is not fixed
    window.scrollTo({
      top: 0,
    });
    // set timeout for closing search, so the animation has time to happen
    if (searchBck.classList.contains("openSearchBck")) {
      setTimeout(() => {
        searchBck.classList.toggle("openSearchBck");
      }, 400);
    } else {
      searchBck.classList.toggle("openSearchBck");
    }
    searchContent.classList.toggle("openSearchContent");
    all("html, body").forEach((e) => e.classList.toggle("noScroll"));
  });

  searchArticle(articlesData);
}

function searchArticle(articlesData) {
  const searchInput = one("#searchInput");
  const articlesContainer = one(".search__content__articlesContainer");
  searchInput.addEventListener("input", (e) => {
    articlesContainer.innerHTML = "";
    // lowercase so the search result is in the same format
    const value = e.target.value.toLowerCase();
    value !== ""
      ? (articlesContainer.style.display = "block")
      : (articlesContainer.style.display = "none");
    articlesData.forEach((article) => {
      // comparing input value with title and text from json data
      if (
        (article.title.toLowerCase().includes(value) && value !== "") ||
        (article.text.toLowerCase().includes(value) && value !== "")
      ) {
        const articleElement = `
            <article class="searchArticle" data-id="${article.id}">
              <h4>${article.title}</h4>
              <p>Published ${article.date_added}</p>
              <h6>${article.text.slice(0, 100)}...</h6>
            </article>
            `;
        articlesContainer.insertAdjacentHTML("afterbegin", articleElement);
      }
    });

    // open modal with article
    all(".searchArticle").forEach((el) => {
      el.addEventListener("click", () => {
        articlesData.forEach((article) => {
          if (article.id == el.dataset.id) {
            openModal(article);
          }
        });
      });
    });
  });
}
