import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {routes} from './Route.js';

export default function AppRouter() {
    return (
        <Routes>
            {routes.map((route) => (
                <Route path={route.path} element={<route.element />}>
                    {route.children?.map((child, childIdx) => (
                        <Route key={childIdx} path={child.path} element={<child.element />} />
                    ))}
                </Route>
            ))}
        </Routes>
    );
}
