// import { error } from '@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';
import refs from './refs';

import imagesTpl from '../templates/image-finder.hbs';

function updateImagesMarkup(hits) {
  const murkup = imagesTpl(hits);
  refs.imagesContainer.insertAdjacentHTML('beforeend', murkup);
}

export default updateImagesMarkup;
