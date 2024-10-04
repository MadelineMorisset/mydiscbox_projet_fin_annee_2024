// React imports
import { Link } from "react-router-dom";
// Images
import Logo from "../../assets/images/darkLogo.png";
// CSS
import "./logPage_mobile.css";
// Components
import LogsFooter from "../footers/logsFooter/logs_footer";

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

            <LogsFooter />
        </>
    );
}

export default LogPage;
