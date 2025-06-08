import {Outlet} from "react-router";
import Navbar from "../components/Navbar/Navbar.jsx";
import cl from './Dashboard.module.scss'

export default function Dashboard() {
    return (
        <div className={cl.page}>
            <div className={cl.navbar}>
                <Navbar />
            </div>

            <div className={cl.outlet}>
                <Outlet />
            </div>
        </div>
    );
}
