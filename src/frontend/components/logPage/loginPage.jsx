// React imports
import { useState } from "react";
// CSS
import "./logPage_mobile.css";
// Components
import LogsFooter from "../footers/logsFooter/logs_footer";
import LogsHeader from "../headers/logsHeader/logs_header";
import LoginButton from "../buttons/login_button";

function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handlerLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch(
                "../../../backend/logsPages/login.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            const data = await response.json();

            if (data.validation) {
                setIsLoggedIn(true); // connexion réussie
            } else {
                setError(data.errorMessage); // connexion échouée
            }
        } catch (error) {
            console.error("Erreur : ", error);
            setError("Erreur de connection, veuillez réessayer.");
        }
    };
    return (
        <>
            <LogsHeader />
            <main className="mainContainer">
                <form onSubmit={handlerLogin} className="form">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse email"
                        className="form_input title"
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        className="form_input title"
                    />
                    {error && <p className="error_message">{error}</p>}
                </form>
            </main>
            <LogsFooter />
            <LoginButton isLoggedIn={isLoggedIn} />
        </>
    );
}

export default LoginPage;
