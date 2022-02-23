const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OMFOKRjtpNZtdEqvXTXF/books';

export const fetchData = () => (dispatch) => fetch(baseUrl)
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data).forEach((book) => {
      dispatch({
        type: ADD_BOOK,
        payload: {
          item_id: book,
          ...data[book][0],
        },
      });
    });
  });

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.id);

    default:
      return state;
  }
};

export default booksReducer;
