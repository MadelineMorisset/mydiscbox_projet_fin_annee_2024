// React imports
import { Link } from "react-router-dom";
// Images
import Logo from "../../assets/images/darkLogo.png";
import Otto from "../../assets/images/Otto.png";
// CSS
import "../../styles/logPage_mobile.css";
// Components
import LoginPageButton from "../buttons/loginPage_button";
import SigninPageButton from "../buttons/signinPage_button";

function LogPage() {
    return (
        <>
            <header className="headerContainer">
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
                <p id="logoPage_slogan" className="text">
                    Organisez facilement votre collection
                    <br />
                    de CD et de Vinyles avec myDiscBox !
                </p>
            </main>

            <footer className="logPage_footerContainer">
                <img
                    src={Otto}
                    alt="Otto la mascotte de myDiscBox"
                    width={141}
                    height={141}
                    className="logPage_otto"
                />
                <div className="logPage_buttons">
                    {/* Appel des composants */}
                    <LoginPageButton /> {/* bouton de connexion */}
                    <SigninPageButton /> {/* bouton de création de compte */}
                </div>
            </footer>
        </>
    );
}

export default LogPage;
