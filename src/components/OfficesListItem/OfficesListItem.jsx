import css from './OfficesListItem.module.css';

export const OfficesListItem = () => {
    return (
        <li className={css.item}>
            <p className={css.number}>Відділення №</p>
            <p className={css.address}>Місто</p>
            <p className={css.address}>Адреса:</p>
        </li>
    )
}