import css from './ShippingInfo.module.css';

export const ShippingInfo = () => {
    return (
        <div className={css.info}>
            <h2 className={css.status}>Статус доставки:</h2>
            <p className={css.details}>Відправлено:</p>
            <p className={css.details}>Отримано:</p>
        </div>
    )
}