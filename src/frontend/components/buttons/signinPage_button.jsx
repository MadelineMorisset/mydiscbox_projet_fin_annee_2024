import { useNavigate } from "react-router-dom";
import "../../styles/log_buttons.css";

function SigninButton() {
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

export default SigninButton;
