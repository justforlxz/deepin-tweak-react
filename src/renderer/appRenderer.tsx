import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Say something
console.log('[tweak] : Renderer execution started');

// Render application in DOM
createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
