import { NavLink } from "react-router-dom";
import { Desktop, Tablet, Mobile } from "utils/screens";
import css from './AppBar.module.css';

export const AppBar = () => {
    return (
        <header className={css.header}>
            <Desktop>
                <nav className={`${css.navigation} ${css.navigationD}`}>
                    <NavLink to="/" className={`${css.navLink} ${css.navLinkD}`}>
                        Перевірити ТТН
                    </NavLink>
                    <NavLink to="/offices" className={`${css.navLink} ${css.navLinkD}`}>
                        Список відділень
                    </NavLink>
                </nav>
            </Desktop>

            <Tablet>
                <nav className={`${css.navigation} ${css.navigationT}`}>
                    <NavLink to="/" className={`${css.navLink} ${css.navLinkT}`}>
                        Перевірити ТТН
                    </NavLink>
                    <NavLink to="/offices" className={`${css.navLink} ${css.navLinkT}`}>
                        Список відділень
                    </NavLink>
                </nav>
            </Tablet>

            <Mobile>
                <nav className={`${css.navigation} ${css.navigationM}`}>
                    <NavLink to="/" className={`${css.navLink} ${css.navLinkM}`}>
                        Перевірити ТТН
                    </NavLink>
                    <NavLink to="/offices" className={`${css.navLink} ${css.navLinkM}`}>
                        Список відділень
                    </NavLink>
                </nav>
            </Mobile>
        </header>
    )
}