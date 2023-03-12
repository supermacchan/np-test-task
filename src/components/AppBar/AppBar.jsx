import { NavLink } from "react-router-dom";
import { Desktop, Tablet, Mobile } from "utils/screens";
import css from './AppBar.module.css';

export const AppBar = () => {
    return (
        <header className={css.header}>
            <Desktop>
                <nav className={css.navigationD}>
                    <NavLink to="/" className={css.navLinkD}>
                        Перевірити ТТН
                    </NavLink>
                    <NavLink to="/offices" className={css.navLinkD}>
                        Список відділень
                    </NavLink>
                </nav>
            </Desktop>

            <Tablet>
                <nav className={css.navigationT}>
                    <NavLink to="/" className={css.navLinkT}>
                        Перевірити ТТН
                    </NavLink>
                    <NavLink to="/offices" className={css.navLinkT}>
                        Список відділень
                    </NavLink>
                </nav>
            </Tablet>

            <Mobile>
                <nav className={css.navigationM}>
                    <NavLink to="/" className={css.navLinkM}>
                        Перевірити ТТН
                    </NavLink>
                    <NavLink to="/offices" className={css.navLinkM}>
                        Список відділень
                    </NavLink>
                </nav>
            </Mobile>
        </header>
    )
}