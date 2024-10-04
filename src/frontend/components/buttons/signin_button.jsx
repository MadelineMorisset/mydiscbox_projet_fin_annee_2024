import { useNavigate, useLocation } from "react-router-dom";
import "./log_buttons.css";

function SigninButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const whatStyleForSigninButton =
        location.pathname === "/signin"
            ? "loginOrSigninPage-button signinPage-button log-buttons title"
            : "signin-button log-buttons title";

    return (
        <>
            <button
                onClick={() => navigate("/signin")}
                className={whatStyleForSigninButton}
            >
                Créer un compte
            </button>
        </>
    );
}

export default SigninButton;
