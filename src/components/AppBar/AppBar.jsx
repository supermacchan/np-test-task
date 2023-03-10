import css from './AppBar.module.css';

export const AppBar = () => {
    return (
        <header className={css.header}>
            <nav className={css.navigation}>
                {/* will be replaced with NavLink later when routing is added */}
                <button type="button" className={css.navLink}>Перевірити ТТН</button>
                <button type="button" className={css.navLink}>Список відділень</button>
            </nav>
        </header>
    )
}