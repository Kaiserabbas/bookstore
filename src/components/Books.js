import React from 'react';
import { Provider } from 'react-redux';
import RenderBook from './RenderBook';
import BookForm from './BookForm';
import store from '../redux/store';

function Books() {
  return (
    <Provider store={store}>
      <div className="Books">
        <RenderBook />
        <BookForm />
      </div>
    </Provider>
  );
}

export default Books;
