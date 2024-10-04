// React imports
import { useNavigate, Link } from "react-router-dom";
// Images
import Logo from "../../../assets/images/darkLogo.png";
// CSS
import "../../logPage/logPage_mobile.css";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function LogsHeader() {
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
        </>
    );
}

export default LogsHeader;
