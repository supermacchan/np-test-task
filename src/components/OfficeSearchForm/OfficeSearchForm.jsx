import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOffices } from "redux/operations";
import css from './OfficeSearchForm.module.css';

export const OfficeSearchForm = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { value } = event.currentTarget;
        setValue(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(fetchOffices(value));   
    }

    return (
        <form className={css.form} onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="query"
                placeholder="Введіть населений пункт"
                className={css.input}
                onChange={handleInputChange}
                value={value}
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