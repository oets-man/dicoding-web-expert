import CONFIG from '../../global/config';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.title}"
           src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
      <p>${movie.overview}</p>
    </div>
  </div>
`;

const createReviewForm = (id) => `
  <h4>Tulis Komentarmu!</h4>
  <form id="form-review">
    <input type="hidden" name="id" value="${id}">
    <label for="name">Nama:</label>
    <input type="text" required name="name" id="name" />

    <label for="review">Komentar:</label>
    <input type="text" required name="review" id="review" />

    <button type="submit">Kirim</button>
  </form>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="Favoritkan restoran ini" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
    `;

const createLikedButtonTemplate = () => `
  <button aria-label="Hapus dari daftar favorit" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
  `;

export { createMovieItemTemplate, createMovieDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate, createReviewForm };
