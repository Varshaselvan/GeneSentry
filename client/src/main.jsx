import React, { StrictMode } from 'react'; // Ensure React is imported
import { createRoot } from 'react-dom/client'; // For React 18+
import './styles/index.css'; // Tailwind or custom styles

import App from './App.jsx'; // Main App component

// Create root and render the app inside the element with id 'root'
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
