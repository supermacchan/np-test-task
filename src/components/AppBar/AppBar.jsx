import { NavLink } from "react-router-dom";
import css from './AppBar.module.css';

export const AppBar = () => {
    return (
        <header className={css.header}>
            <nav className={css.navigation}>
                <NavLink to="/shippings" className={css.navLink}>
                    Перевірити ТТН
                </NavLink>
                <NavLink to="/offices" className={css.navLink}>
                    Список відділень
                </NavLink>
            </nav>
        </header>
    )
}