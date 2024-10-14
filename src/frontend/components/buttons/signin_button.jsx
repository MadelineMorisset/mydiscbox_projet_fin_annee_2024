import "../../styles/log_buttons.css";

// SigninButton sert à valider la création du compte utilisateur
function SigninButton() {
    return (
        <>
            <button
                type="submit"
                className="loginOrSigninPage-button signinPage-button log-buttons title"
            >
                Créer un compte
            </button>
        </>
    );
}

export default SigninButton;
