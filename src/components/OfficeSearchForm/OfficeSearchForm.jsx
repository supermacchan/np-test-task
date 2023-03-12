import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOffices } from "redux/operations";
import { Desktop, Tablet, Mobile } from "utils/screens";
import css from './OfficeSearchForm.module.css';

export const OfficeSearchForm = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    // controlled input
    const handleInputChange = event => {
        const { value } = event.currentTarget;
        setValue(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(fetchOffices(value));   
    }

    return (
        <>
            <Desktop>
                <form className={`${css.form} ${css.formD}`} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Введіть населений пункт"
                        required
                        className={css.input}
                        onChange={handleInputChange}
                        value={value}
                    />
                    <button 
                        type="submit"
                        className={`${css.button} ${css.buttonD}`}
                    >
                        Показати відділення
                    </button>
                </form>
            </Desktop>

            <Tablet>
                <form className={`${css.form} ${css.formT}`} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Введіть населений пункт"
                        required
                        className={css.input}
                        onChange={handleInputChange}
                        value={value}
                    />
                    <button 
                        type="submit"
                        className={`${css.button} ${css.buttonT}`}
                    >
                        Показати відділення
                    </button>
                </form>
            </Tablet>

            <Mobile>
                <form className={`${css.form} ${css.formM}`} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Введіть населений пункт"
                        required
                        className={css.input}
                        onChange={handleInputChange}
                        value={value}
                    />
                    <button 
                        type="submit"
                        className={`${css.button} ${css.buttonM}`}
                    >
                        Показати відділення
                    </button>
                </form>
            </Mobile>
        </>
    )
}