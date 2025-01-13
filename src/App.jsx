import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";  // Import de MUI
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",  // Couleur principale (bleu)
        },
        secondary: {
            main: "#9c27b0",  // Couleur secondaire (violet)
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
