import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.images-container');
const loader = document.querySelector('.loader');

form.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';
  showLoader();

  const query = e.target.elements.query.value.trim();
  if (!query) {
    iziToast.error({
      message: 'Search field is empty',
      position: 'topRight',
    });
    return;
  }

  searchImages(query)
    .then(data => {
      if (data?.hits?.length) {
        const markup = imagesTemplate(data.hits);
        gallery.innerHTML = markup;
        e.target.reset();
        return;
      }
      throw Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    })
    .catch(err => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again',
        position: 'topRight',
      });
    });
});

function showLoader() {
  loader.style.display = 'inline-block';
}

function hideLoader() {
  loader.style.display = 'none';
}
