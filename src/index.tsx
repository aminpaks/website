import './index.css';
import reportWebVitals from './report-web-vitals';

import('./components').then(({ renderApp }) => renderApp());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
