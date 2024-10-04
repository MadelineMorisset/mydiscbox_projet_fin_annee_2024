// React imports
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// CSS
import "./log_buttons.css";
import "../../styles/style.css";

function LoginButton({ isLoggedIn }) {
    const navigate = useNavigate();

    const handleClickLogin = () => {
        if (isLoggedIn) {
            navigate("../mediaLibraryPages/mediaLibrary_articles.jsx");
        } else {
            navigate("./loginPage.jsx");
        }
    };
    return (
        <>
            <button
                onClick={handleClickLogin}
                className="log-buttons loginOrSigninPage-button title"
            >
                Se connecter
            </button>
        </>
    );
}

LoginButton.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default LoginButton;
