//active creator

export function selectBook(book) { //book to obiekt z tytułem
// selectBook is an ActionCreator, it needs to return an action,
// an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
