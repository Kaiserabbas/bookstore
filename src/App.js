import './App.css';
import React from 'react';
import { Provider } from 'react-redux'; // Import the Provider component
import { Route, Routes } from 'react-router-dom';
import store from './redux/store'; // Import your Redux store
import Books from './components/Books';
import Categories from './components/Categories';
import Nav from './components/Nav';

function App() {
  return (
    <Provider store={store}>
      {' '}
      {/* Wrap your components with Provider and pass the store */}
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
