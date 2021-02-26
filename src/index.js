import './styles.css';
import newService from './js/apiService';
import debounce from 'lodash.debounce/index.js';
import refs from './js/refs.js';
import updateImagesMarkup from './js/updateImagesMarkup';

refs.searchInput.addEventListener(
  'input',
  debounce(() => {
    newService.query = refs.searchInput.value.trim();
    newService.resetPage();
    refs.imagesContainer.innerHTML = '';

    if (newService.query === '') {
      refs.loadMoreBtn.classList.add('is-hidden');
      return;
    }
    feachImages();
  }, 500),
);

refs.loadMoreBtn.addEventListener('click', feachImages);

function feachImages() {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');

  newService
    .apiService()
    .then(hits => {
      if (!hits.length) {
        refs.loadMoreBtn.classList.add('is-hidden');
        return;
      }

      refs.loadMoreBtn.classList.remove('is-hidden');
      updateImagesMarkup(hits);

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}
