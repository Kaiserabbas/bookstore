import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import store from './redux/store';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <Provider store={store}>
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
