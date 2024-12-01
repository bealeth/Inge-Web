
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HelpPage from '../pages/HelpPage'; // Ajusta la ruta según la ubicación de tu componente
import HomePage from '../pages/HomePage'; // Si tienes una página de inicio
import NotFoundPage from '../pages/NotFoundPage'; // Página para rutas inexistentes
import PrivacyPage from '../pages/PrivacyPage';
import TermsPage from '../pages/TermsPage';
import AboutUsPage from '../pages/AboutUsPage';
import AdminView from "../views/AdminView";
import GuestView from "../views/GuestView";
import HostView from "../views/HostView";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} /> {/* Página principal */}
            <Route path="/help" element={<HelpPage />} /> {/* Centro de ayuda */}
            <Route path="*" element={<NotFoundPage />} /> {/* Página 404 */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/admin" element={<AdminView />} />
            <Route path="/guest" element={<GuestView />} />
            <Route path="/host" element={<HostView />} />
        </Routes>
    );
};

export default AppRoutes;
