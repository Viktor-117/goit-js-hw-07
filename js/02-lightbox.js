import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryTemplate = ({
  preview,
  original,
  description,
}) => `<li class="gallery__item"><a class='gallery__link' href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;

const refs = {
  container: document.querySelector(".gallery"),
  item: document.querySelector(".gallery__item"),
  image: document.querySelector(".gallery__image"),
};

refs.container.insertAdjacentHTML(
  "beforeend",
  galleryItems.map(galleryTemplate).join("")
);

refs.container.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  //   if (evt.target.nodeName !== "IMG") {
  //     return;
  //   }
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
