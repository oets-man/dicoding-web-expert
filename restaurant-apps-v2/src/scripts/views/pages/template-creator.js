const createReviewForm = (id) => `
  <h4>Tulis Komentarmu!</h4>
  <form id="form-review">
    <input type="hidden" name="id" value="${id}">
    <label for="name">Nama:</label>
    <input required type="text" name="name" id="name" placeholder="Tulis namamu!" autocomplete="off" />

    <label for="review">Komentar:</label>
    <textarea required id="review" name="review" rows="3" placeholder="Tulis komentarmu!" autocomplete="off"></textarea>
    <div class="buttons">
      <button type="reset">Reset</button>
      <button type="submit">Kirim</button>
    </div>
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

export { createLikeButtonTemplate, createLikedButtonTemplate, createReviewForm };
