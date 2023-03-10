import css from './OfficeSearchForm.module.css';

export const OfficeSearchForm = () => {
    return (
        <form className={css.form}>
            <input
                type="text"
                name="query"
                placeholder="Введіть назву міста"
                className={css.input}
            />
            <button 
                type="submit"
                className={css.button}
            >
                Показати відділення
            </button>
        </form>
    )
}