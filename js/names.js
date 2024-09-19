const { books } = require('./task-1');

export const names = books
  .map(autors => autors.author)
  .filter(
    (ratingAll, MIN_BOOK_RATING, array) =>
      array.rating(ratingAll) > MIN_BOOK_RATING
  )
  .toSorted((a, b) => a.localeCompare(b));
