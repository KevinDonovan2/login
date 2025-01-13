import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../conf/firebase-config";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; 

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Inscription réussie !");
            navigate("/home"); 
        } catch (error) {
            console.error("Error code:", error.code);
            console.error("Error message:", error.message);
            alert("Erreur : " + error.message);
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography variant="h4" gutterBottom>
                Inscription
            </Typography>
            <form onSubmit={handleRegister}>
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
                    S'inscrire
                </Button>
            </form>
        </Container>
    );
}

export default Register;
