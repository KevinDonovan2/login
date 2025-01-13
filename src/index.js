import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // si vous avez un fichier de styles global

// Sélectionner l'élément racine
const rootElement = document.getElementById("root");

// Créer le root avec React 18
const root = ReactDOM.createRoot(rootElement);

// Rendre l'application
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
