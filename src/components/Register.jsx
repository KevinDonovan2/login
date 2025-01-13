import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../conf/firebase-config";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Inscription réussie !");
        } catch (error) {
            console.error("Error code:", error.code);
            console.error("Error message:", error.message);
            alert("Erreur : " + error.message);
        }
    };
    

    return (
        <div>
            <h2>Inscription</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default Register;