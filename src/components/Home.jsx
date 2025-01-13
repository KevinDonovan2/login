import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../conf/firebase-config";

function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        alert("Déconnexion réussie !");
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
