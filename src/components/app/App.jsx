import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AboutMe from 'components/aboutMe/AboutMe';
import Portfolio from 'components/portfolio/Portfolio';
import Contacts from 'components/contacts/Contacts';
import Layout from 'layouts/Layout';

const DashboardPage = React.lazy(() => import('views/dashboardPage/DashboardPage'));

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<DashboardPage />}>
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
