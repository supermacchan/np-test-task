import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={css.content}>
            <h2 className={css.title}>Нажаль, такої сторінки немає.</h2>
            <Link to="/" className={css.link}>Повернутись на Головну</Link>
        </div>
    )
}

export default NotFound;