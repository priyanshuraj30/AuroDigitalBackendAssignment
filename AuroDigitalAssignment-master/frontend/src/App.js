import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioBuilder from "./pages/PortfolioBuilder";
import PortfolioViewerDynamicProfessional from "./pages/PortfolioViewerDynamicProfessional";
import PortfolioViewerDynamicCreative from "./pages/PortfolioViewerDynamicCreative";
import PortfolioViewerDynamicTechie from "./pages/PortfolioViewerDynamicTechie";
import PortfolioViewer from "./pages/PortfolioViewer";

import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/builder" element={<PortfolioBuilder />} />
                <Route path="/professional/:id" element={<PortfolioViewerDynamicProfessional />} />
                <Route path="/creative/:id" element={<PortfolioViewerDynamicCreative />} />
                <Route path="/techie/:id" element={<PortfolioViewerDynamicTechie />} />

                <Route path="/portfolio/example" element={<PortfolioViewer />} />
            </Routes>
        </Router>
    );
}

export default App;
