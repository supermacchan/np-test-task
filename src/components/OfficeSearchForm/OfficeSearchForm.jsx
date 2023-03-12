import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOffices } from "redux/operations";
import { Desktop, Tablet, Mobile } from "utils/screens";
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
        <>
            <Desktop>
                <form className={css.formD} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Введіть населений пункт"
                        className={css.inputD}
                        onChange={handleInputChange}
                        value={value}
                    />
                    <button 
                        type="submit"
                        className={css.buttonD}
                    >
                        Показати відділення
                    </button>
                </form>
            </Desktop>

            <Tablet>
                <form className={css.formT} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Введіть населений пункт"
                        className={css.inputT}
                        onChange={handleInputChange}
                        value={value}
                    />
                    <button 
                        type="submit"
                        className={css.buttonT}
                    >
                        Показати відділення
                    </button>
                </form>
            </Tablet>

            <Mobile>
                <form className={css.formM} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Введіть населений пункт"
                        className={css.inputM}
                        onChange={handleInputChange}
                        value={value}
                    />
                    <button 
                        type="submit"
                        className={css.buttonM}
                    >
                        Показати відділення
                    </button>
                </form>
            </Mobile>
        </>
    )
}