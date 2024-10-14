// React imports
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Images
import Logo from "../../assets/images/darkLogo.png";
import Otto from "../../assets/images/Otto.png";
// CSS
import "../../styles/logPage_mobile.css";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// Components
import LoginButton from "../buttons/login_button";
import SigninPageButton from "../buttons/signinPage_button";

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handlerLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const loginData = { email, password };

        try {
            const response = await fetch(
                "http://localhost/mydiscbox_projet_fin_annee_2024/src/backend/logsPages/login.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(loginData),
                }
            );

            const data = await response.json();

            if (response.ok && data.success) {
                setErrorMessage("");
                // Rediriger vers la page médiathèque - articles
                navigate("/home");
            } else {
                setErrorMessage(data.message || "Erreur lors de la connexion");
            }
        } catch (error) {
            setErrorMessage("Erreur de connection au serveur.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <header className="headerContainer">
                <div
                    id="logPage_returnIconContainer"
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="fa-solid fa-angle-left fa-xl"
                    />
                </div>

                <Link to="/" id="logPage_logoContainer">
                    <img
                        src={Logo}
                        alt="Logo de myDiscBox"
                        width={86}
                        height={86}
                        className="logPage_logo"
                    />
                </Link>
            </header>

            <main className="mainContainer">
                {errorMessage && (
                    <p className="error_message">{errorMessage}</p>
                )}

                <form onSubmit={handlerLogin} className="form">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse email"
                        value={email}
                        className="form_input text"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        autoComplete="email"
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={password}
                        className="form_input text"
                        onChange={(event) => setpassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />

                    <footer className="logsPages_footerContainer">
                        <img
                            src={Otto}
                            alt="Otto la mascotte de myDiscBox"
                            width={141}
                            height={141}
                            className="logPage_otto"
                        />
                        <div className="loginPage_buttons">
                            {/* Appel des composants */}
                            <LoginButton isLoading={isLoading} />
                            <SigninPageButton />
                        </div>
                    </footer>
                </form>
            </main>
        </>
    );
}

export default LoginPage;
