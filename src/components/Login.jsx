import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../conf/firebase-config";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";  // Import de MUI

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Connexion réussie !");
            navigate("/home");
        } catch (error) {
            alert("Erreur : " + error.message);
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography variant="h4" gutterBottom>
                Connexion
            </Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Mot de passe"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    style={{ marginTop: "20px" }}
                >
                    Se connecter
                </Button>
            </form>
        </Container>
    );
}

export default Login;
