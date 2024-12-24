import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Blog from './Blog/Blog';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} ></Route>
        <Route path="/blog" element={<Blog />} ></Route>
        {/* <Route path="blog" element={<Blog />}> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

