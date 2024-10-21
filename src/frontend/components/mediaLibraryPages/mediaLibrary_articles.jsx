// React imports
import { Link } from "react-router-dom";
// Images
import Logo from "../../assets/images/darkLogo.png";
// CSS
import "../../styles/mediaLibrary_mobile.css";

function MediaLibraryArticles() {
    return (
        <>
            <header>
                <Link to="/home" id="mediaLibrary_logoContainer">
                    <img
                        src={Logo}
                        alt="Logo de myDiscBox"
                        width={50}
                        height={50}
                        className="logPage_logo"
                    />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <a href="/home/articles">Articles</a>
                        </li>
                        <li>
                            <a
                                href="/home/shelves"
                                hidden
                                alt="À ajouter en V4"
                            >
                                Étagères
                            </a>
                        </li>
                        <li>
                            <a href="/home/genres" hidden alt="À ajouter en V3">
                                Genres
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main></main>

            <footer>
                <nav>
                    <ul>
                        <li>
                            <a href="/home">Médiathèque</a>
                        </li>
                        <li>
                            <a
                                href="/home/add-scann"
                                hidden
                                alt="À ajouter en V4"
                            >
                                Ajout article
                            </a>
                        </li>
                        <li>
                            <a
                                href="/home/account"
                                hidden
                                alt="À ajouter en V3"
                            >
                                Compte
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}

export default MediaLibraryArticles;
