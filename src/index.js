import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {
  getTranding,
  getByQuery,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from './utils/Backend_API';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

getTranding();
getByQuery('potter');
getMovieDetails(671);
getMovieCredits('671');
getMovieReviews(671);
