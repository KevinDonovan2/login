import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";  // Import de MUI

function LandingPage() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
            <Typography variant="h4" gutterBottom>
                Page de démarrage
            </Typography>
            <Button
                variant="contained"
                color="primary"
                style={{ margin: "10px" }}
                onClick={() => handleNavigate("/login")}
            >
                Se connecter
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                style={{ margin: "10px" }}
                onClick={() => handleNavigate("/register")}
            >
                S'inscrire
            </Button>
        </Container>
    );
}

export default LandingPage;
