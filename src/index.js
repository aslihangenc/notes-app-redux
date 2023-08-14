
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/NotesApp';
import "./App.css"

// createRoot API'sini kullanarak bileşen render edildi.
const rootElement = document.getElementById('mount-point');
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

