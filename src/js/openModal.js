function one(q) {
  return document.querySelector(q);
}
function all(q) {
  return document.querySelectorAll(q);
}

export default function openModal(article) {
  const modal = one(".modal");
  const modalContent = one(".modal__content");

  modalContent.innerHTML = "";

  const articleContent = `
        <div class="modal__content__close">
            <img src="./assets/icons/close.svg" alt="close icon">
        </div>
        <div class="modal__content__image">
            <img src="${article.photo}" alt="article photo"/>
        </div>
        <div class="modal__content__text">
        <h2>${article.title}</h2>
        <p>Published ${article.date_added}</p>
        <h6>${article.text}</h6>
        </div>`;
  modalContent.insertAdjacentHTML("afterbegin", articleContent);

  modal.classList.toggle("openModal");
  modal.classList.toggle("setModalZindex");
  modalContent.classList.toggle("openModalContent");
  all("html, body").forEach((e) => e.classList.toggle("noScroll"));

  const modalCloseButton = one(".modal__content__close");

  modalCloseButton.addEventListener("click", () => {
    modal.classList.toggle("openModal");
    setTimeout(() => {
      modal.classList.toggle("setModalZindex");
    }, 400);
    modalContent.classList.toggle("openModalContent");
    all("html, body").forEach((e) => e.classList.toggle("noScroll"));
  });
}
