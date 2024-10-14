import { useNavigate } from "react-router-dom";
import "../../styles/log_buttons.css";

// SigninButton sert à envoyer vers la page de création du compte utilisateur
function SigninPageButton() {
    const navigate = useNavigate();

    return (
        <>
            <button
                onClick={() => navigate("/signin")}
                className="signin-button log-buttons title"
            >
                Créer un compte
            </button>
        </>
    );
}

export default SigninPageButton;
