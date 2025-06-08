import Dashboard from "../layouts/Dashboard.jsx";
import HomePage from '../pages/Home/HomePage.jsx';
import ErrorPage from '../pages/Error/ErrorPage.jsx';
import SportPage from "../modules/SportModule/SportPage.jsx";

export const routes = [
    {
        path: '/',
        element: Dashboard ,
        children: [
            { index: true, element: HomePage },
            { path: '/', element: HomePage },
            { path: '/sport', element: SportPage },
            { path: '*', element: ErrorPage  }
        ]
    }
];
