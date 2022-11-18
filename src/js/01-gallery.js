// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const makeGalleryItems = galleryItems
    .map(({ preview, original, description }) => 
         `<div class="gallery__item">
        <a class="gallery__link" href='${original}'>
          <img class="gallery__image"
            src='${preview}'
            data-source='${original}'
            alt='${description}'/>
        </a>
      </div>`)
    .join("");

galleryEl.insertAdjacentHTML("afterbegin", makeGalleryItems);
let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

console.log(galleryItems);
