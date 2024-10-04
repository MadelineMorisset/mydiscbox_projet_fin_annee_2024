// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// CSS
import "./frontend/styles/css_reset.css";
import "./frontend/styles/style.css";
// Fonts
import "@fontsource/alegreya-sans-sc/500.css";
import "@fontsource-variable/lora";
// Pages
import LogPage from "./frontend/components/logPage/logPage";
import LoginPage from "./frontend/components/logPage/loginPage";
import SigninPage from "./frontend/components/logPage/signinPage";
// import HomePage from './HomePage';

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Router>
                <Routes>
                    {/* Page d'accueil (logPage) */}
                    <Route path="/" element={<LogPage />} />

                    {/* Page de connexion */}
                    <Route path="/login" element={<LoginPage />} />

                    {/* Page de création de compte */}
                    <Route path="/signin" element={<SigninPage />} />

                    {/* Page de la médiathèque (HomePage) */}
                    {/* <Route path="/home" element={isLoggedIn ? <HomePage /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
