import React from 'react';
import Main from './Pages/Main/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateBook from './Pages/CreateBook/CreateBook';
import SavedPage from './Pages/SavedPage/SavedPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/create-book" element={<CreateBook />}/>
            <Route path="/edit-book/:id" element={<CreateBook />}/>
            <Route path="/favorites" element={<SavedPage />}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
