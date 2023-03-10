import css from './ShippingSearchForm.module.css';

export const ShippingSearchForm = () => {
    return (
        <form className={css.form}>
            <input
                type="text"
                name="query"
                placeholder="Введіть номер ТТН"
                className={css.input}
            />
            <button 
                type="submit"
                className={css.button}
            >
                Перевірити статус
            </button>
        </form>
    )
}