// CSS
import "../../styles/log_buttons.css";
import "../../styles/style.css";

// LoginButton sert à valider la connexion au compte utilisateur
function LoginButton() {
    return (
        <>
            <button
                type="submit"
                className="log-buttons loginOrSigninPage-button title"
            >
                Se connecter
            </button>
        </>
    );
}

export default LoginButton;
