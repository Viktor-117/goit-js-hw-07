import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryTemplate = ({
  preview,
  original,
  description,
}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const refs = {
  container: document.querySelector(".gallery"),
  item: document.querySelector(".gallery__item"),
  link: document.querySelector(".gallery__link"),
  image: document.querySelector(".gallery__image"),
};

refs.container.insertAdjacentHTML(
  "beforeend",
  galleryItems.map(galleryTemplate).join("")
);

refs.container.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
      <img src="${evt.target.dataset.source}">
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
