import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.images-container');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  gallery.innerHTML = '';

  showLoader();

  const query = e.target.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Search field is empty',
      position: 'topRight',
    });

    hideLoader();
    return;
  }

  getImages(query)
    .then(data => {
      if (data && data.hits && data.hits.length) {
        renderImages(data.hits);
      } else {
        throw Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
}

function showLoader() {
  loader.style.display = 'inline-block';
}

function hideLoader() {
  loader.style.display = 'none';
}
