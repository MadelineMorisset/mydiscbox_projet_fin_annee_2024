// Images
import Otto from "../../assets/images/Otto.png";
// CSS
import "./logPage_mobile.css";
// Components
import SigninButton from "../buttons/signin_button";
import LogsHeader from "../headers/logsHeader/logs_header";

function SigninPage() {
    return (
        <>
            <LogsHeader />
            <main className="mainContainer">
                <form method="get" action="" className="form">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse email"
                        className="form_input title"
                    />
                    <input
                        type="text"
                        id="nickname"
                        name="nickname"
                        placeholder="Pseudonyme"
                        className="form_input title"
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        className="form_input title"
                    />
                    <input
                        type="password"
                        id="repassword"
                        name="repassword"
                        placeholder="Vérifier le mot de passe"
                        className="form_input title"
                    />
                </form>
            </main>

            <footer className="logPages_footerContainer signinPage_footerContainer">
                <img
                    src={Otto}
                    alt="Otto la mascotte de myDiscBox"
                    width={141}
                    height={141}
                    className="logPage_otto"
                />
                <div className="logPage_buttons">
                    {/* Appel des composants */}
                    <SigninButton /> {/* bouton de création de compte */}
                </div>
            </footer>
        </>
    );
}

export default SigninPage;
