import openModal from "./openModal";

function one(q) {
  return document.querySelector(q);
}
function all(q) {
  return document.querySelectorAll(q);
}

export default function articlesActions(data, articlesData) {
  const articlesContainer = one(".articles");
  const articlesNavigation = one(".pagenumbers");
  let current_page = 1;
  let rows = 4;
  const prevButton = one(".prevPage");
  const nextButton = one(".nextPage");
  const paginationText = one(".pagenumbers__text");

  function displayArticles(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page; // 5*0=0
    let end = start + rows_per_page; // 0+5=5
    let paginatedItems = items.slice(start, end); // start 0 end 5

    for (let i = 0; i < paginatedItems.length; i++) {
      // 0 < 5
      let item = paginatedItems[i]; // index for object
      const articleText = item.text.slice(0, 200) + "...";

      const articleContainer = `<article class="articles__one">
        <div class="articles__one__image">
            <img src="${item.photo}"/>
        </div>
        <div class="articles__one__right">
            <h4>${item.title}</h4>
            <p>${item.date_added}</p>
            <h6>${articleText}</h6>
            <button class="readMoreButton blackWhiteButton" data-id="${item.id}">Read more</button>
        </div>
        </article>`;
      articlesContainer.insertAdjacentHTML("afterbegin", articleContainer);
    }

    all(".readMoreButton").forEach((button) => {
      button.addEventListener("click", () => {
        articlesData.forEach((article) => {
          if (article.id == button.dataset.id) {
            openModal(article);
          }
        });
      });
    });
  }

  function setupPagination(items, wrapper, rows_per_page) {
    let page_count = Math.ceil(items.length / rows_per_page); // 15/5=3

    paginationText.innerText = `Page ${current_page} of ${page_count}`;

    prevButton.addEventListener("click", () => {
      if (current_page > 1) {
        current_page--;
        displayArticles(items, articlesContainer, rows, current_page);
        paginationText.innerText = `Page ${current_page} of ${page_count}`;
      }
    });

    nextButton.addEventListener("click", () => {
      if (current_page < page_count) {
        current_page++;
        displayArticles(items, articlesContainer, rows, current_page);
        paginationText.innerText = `Page ${current_page} of ${page_count}`;
      }
    });
  }

  displayArticles(data, articlesContainer, rows, current_page);
  setupPagination(data, articlesNavigation, rows);
}
