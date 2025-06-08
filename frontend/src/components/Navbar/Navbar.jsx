
import cl from "./Navbar.module.scss";
import {NavLink} from "react-router";



export default function Navbar() {

    return (
        <div className={[cl.container, 'haupt-shadow'].join(' ')}>

            <section>
                <div>
                    logo
                </div>
            </section>

            <section>
                <hr />
            </section>

            <section>
                <div>
                    <NavLink to="/sport">Sport</NavLink>
                </div>
            </section>

            <section>
                <hr />
            </section>

            <section>
                <div>
                    hui
                </div>
            </section>

        </div>

    );
}
