// React imports
import { useNavigate } from "react-router-dom";
// CSS
import "../../styles/log_buttons.css";
import "../../styles/style.css";

// LoginPageButton sert à envoyer vers la page connexion utilisateur
function LoginPageButton() {
    const navigate = useNavigate();

    return (
        <>
            <button
                onClick={() => navigate("/login")}
                className="log-buttons loginOrSigninPage-button title"
            >
                Se connecter
            </button>
        </>
    );
}

export default LoginPageButton;
