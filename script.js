const popup = document.querySelector(".popup");
const buttonClose = popup.querySelector(".popup__close");
const popupTitle = popup.querySelector(".popup__title");
const projects = document.querySelectorAll(".projects__block");
const linkFirst = popup.querySelector(".popup__link-first");
const linkSecond = popup.querySelector(".popup__link-second");

projects.forEach((project) => {
  const button = project.querySelector(".projects__button");
  button.addEventListener("click", () => {
    popup.classList.add("popup-visible");
    const title = project.querySelector(".projects__text").textContent;
    popupTitle.textContent = title;

    const linkFirstData = button.getAttribute("linkfirst");
    linkFirst.setAttribute("href", linkFirstData);

    const linkSecondData = button.getAttribute("linksecond");
    linkSecond.setAttribute("href", linkSecondData);
  });
});

buttonClose.addEventListener("click", () => {
  popup.classList.remove("popup-visible");
});

popup.addEventListener("click", (evt) => {
  evt.target.classList.remove("popup-visible");
});
