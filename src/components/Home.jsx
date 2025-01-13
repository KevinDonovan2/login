import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../conf/firebase-config";
import { useNavigate } from "react-router-dom";

function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                navigate("/home");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        await signOut(auth);
        alert("Déconnexion réussie !");
        navigate("/");  // Redirection vers la page d'accueil après déconnexion
    };

    return (
        <div>
            <h2>Bienvenue</h2>
            {user ? (
                <div>
                    <p>Connecté en tant que : {user.email}</p>
                    <button onClick={handleLogout}>Se déconnecter</button>
                </div>
            ) : (
                <p>Pas d'utilisateur connecté.</p>
            )}
        </div>
    );
}

export default Home;
