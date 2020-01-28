import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedLayout from "./layouts/ProtectedLayout";

// pages
import PublicPage from "./pages/PublicPage";
const ProtectedPage = lazy(() => import("./pages/ProtectedPage"));

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Route exact={true} path={'/'} component={PublicPage} />
            <ProtectedLayout exact={true} path={'/protected'}>
                <Suspense fallback={<div>Loading...</div>}>
                    <ProtectedPage />
                </Suspense>
            </ProtectedLayout>
        </Router>
    );
};

export default AppRouter;
