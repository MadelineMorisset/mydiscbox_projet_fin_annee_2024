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
                            <a href="/home/shelves" alt="À ajouter en V4">
                                Étagères
                            </a>
                        </li>
                        <li>
                            <a href="/home/genres" alt="À ajouter en V3">
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
                            {/* Ajout manuel en V1; Ajout par scanne du produit en V2 */}
                            <a href="/home/add-scan">Ajout article</a>
                        </li>
                        <li>
                            {/* À ajouter en V3 */}
                            <a href="/home/account">Compte</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}

export default MediaLibraryArticles;
