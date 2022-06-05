function one(q) {
  return document.querySelector(q);
}
function all(q) {
  return document.querySelectorAll(q);
}

export default function burgerAction() {
  const burgerMenu = one(".headerRight__burgerMenu");
  const menu = one(".menu");
  const menuContent = one(".menu__content");

  burgerMenu.addEventListener("click", () => {
    // because menu is not 100% height, we dont want some space at the top
    window.scrollTo({
      top: 0,
    });
    burgerMenu.classList.toggle("openBurgerMenu");
    menu.classList.toggle("openMenu");
    // set timeout for closing menu, so the animation has time to happen
    if (menu.classList.contains("setMenuZindex")) {
      setTimeout(() => {
        menu.classList.toggle("setMenuZindex");
      }, 400);
    } else {
      menu.classList.toggle("setMenuZindex");
    }
    menuContent.classList.toggle("openMenuContent");
    all("html, body").forEach((e) => e.classList.toggle("noScroll"));
  });
}
