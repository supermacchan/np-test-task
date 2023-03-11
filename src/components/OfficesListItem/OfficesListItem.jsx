import css from './OfficesListItem.module.css';

export const OfficesListItem = ({ num, address }) => {
    return (
        <li className={css.item}>
            <p className={css.number}>Відділення № {num}</p>
            <p className={css.address}>Адреса: {address}</p>
        </li>
    )
}