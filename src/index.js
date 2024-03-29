
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { InitSpin } from './initial-spin/initial-spin';
import { Solution } from './solu';


// const General = React.lazy(()=> import('./App'));

// const Solution = React.lazy(()=> import('./solu'));

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Suspense fallback={< InitSpin /> }>
      <Solution />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();