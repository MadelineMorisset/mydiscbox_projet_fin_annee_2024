// React imports
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
import SigninButton from "../buttons/signin_button";

function SigninPage() {
    const navigate = useNavigate();

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
                <form
                    method="POST"
                    action="http://localhost/mydiscbox_projet_fin_annee_2024/src/backend/logsPages/signin.php"
                    className="form"
                >
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse email"
                        className="form_input text"
                    />
                    <input
                        type="text"
                        id="nickname"
                        name="nickname"
                        placeholder="Pseudonyme"
                        className="form_input text"
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        className="form_input text"
                    />
                    <input
                        type="password"
                        id="repassword"
                        name="repassword"
                        placeholder="Vérifier le mot de passe"
                        className="form_input text"
                    />

                    <footer className="logsPages_footerContainer signinPage_footerContainer">
                        <img
                            src={Otto}
                            alt="Otto la mascotte de myDiscBox"
                            width={141}
                            height={141}
                            className="logPage_otto"
                        />
                        <div className="signinPage_buttons signin_button">
                            {/* Appel des composants */}
                            <SigninButton />{" "}
                            {/* bouton de création de compte */}
                        </div>
                    </footer>
                </form>
            </main>
        </>
    );
}

export default SigninPage;
