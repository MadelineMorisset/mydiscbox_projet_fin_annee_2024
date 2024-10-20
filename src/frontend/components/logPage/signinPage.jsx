// React imports
import { useState } from "react";
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

    const [message, setMessage] = useState("");

    const handlerSignin = async (event) => {
        event.preventDefault();

        // Récuperer les données du formulaire
        const signinData = new FormData(event.target);

        const response = await fetch(
            "http://localhost/mydiscbox_projet_fin_annee_2024/src/backend/logsPages/signin.php",
            {
                method: "POST",
                body: signinData,
            }
        );

        // Convertir la réponse en JSON
        const data = await response.json();

        setMessage(data.message);
    };

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
                    onSubmit={handlerSignin}
                    method="POST"
                    action="http://localhost/mydiscbox_projet_fin_annee_2024/src/backend/logsPages/signin.php"
                    className="form"
                >
                    {message && <p>{message}</p>}

                    {/* <div className="form_container">
                        <label htmlFor="email" className="form_label text">
                            Adresse email *
                        </label> */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse email"
                        className="form_input text"
                        required
                    />
                    {/*
                    <div>
                        <label htmlFor="nickname" className="form_label text">
                            Pseudonyme (facultatif)
                        </label> */}
                    <input
                        type="text"
                        id="nickname"
                        name="nickname"
                        placeholder="Pseudonyme"
                        className="form_input text"
                    />
                    {/* </div>
                    <div>
                        <label htmlFor="password" className="form_label text">
                            Mot de passe *
                        </label> */}
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        className="form_input text"
                        required
                    />
                    {/* </div>
                    <div>
                        <label htmlFor="repassword" className="form_label text">
                            Vérifier le mot de passe *
                        </label> */}
                    <input
                        type="password"
                        id="repassword"
                        name="repassword"
                        placeholder="Vérifier le mot de passe"
                        className="form_input text"
                        required
                    />
                    {/* </div> */}

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
