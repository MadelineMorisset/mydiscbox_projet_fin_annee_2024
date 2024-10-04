// React imports
import PropTypes from "prop-types";
// Images
import Otto from "../../../assets/images/Otto.png";
// CSS
import "../../logPage/logPage_mobile.css";
// Components
import LoginButton from "../../buttons/login_button";
import SigninButton from "../../buttons/signin_button";

function LogsFooter({ isLoggedIn }) {
    return (
        <>
            <footer className="logPages_footerContainer">
                <img
                    src={Otto}
                    alt="Otto la mascotte de myDiscBox"
                    width={141}
                    height={141}
                    className="logPage_otto"
                />
                <div className="logPage_buttons">
                    {/* Appel des composants */}
                    <LoginButton isLoggedIn={isLoggedIn} />{" "}
                    {/* bouton de connexion */}
                    <SigninButton /> {/* bouton de création de compte */}
                </div>
            </footer>
        </>
    );
}

LogsFooter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default LogsFooter;
