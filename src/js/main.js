import "../scss/main.scss";
import burgerAction from "./burgerAction";
import articlesActions from "./articlesActions";
import populateSlider from "./populateSlider";
import searchAction from "./searchAction";

let slidersData;
let articlesData;

document.addEventListener("DOMContentLoaded", function () {
  burgerAction();
  getSlidersData();
  getArticlesData();
});

async function getSlidersData() {
  const requestURL = "assets/data/slidersData.json";
  const request = new Request(requestURL);

  await fetch(request)
    .then((response) => response.json())
    .then((data) => {
      slidersData = data;
      populateSlider(data, slidersData);
    });
}

async function getArticlesData() {
  const requestURL = "assets/data/articles.json";
  const request = new Request(requestURL);

  await fetch(request)
    .then((response) => response.json())
    .then((data) => {
      articlesData = data;
      articlesActions(data, articlesData);
      searchAction(articlesData);
    });
}
