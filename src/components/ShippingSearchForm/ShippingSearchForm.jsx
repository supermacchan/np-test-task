import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShipping } from "redux/selectors";
import { fetchShipping } from "redux/operations";
import { addNewQuery } from "../../redux/historySlice";
import { Desktop, Tablet, Mobile } from "utils/screens";
import css from './ShippingSearchForm.module.css';

export const ShippingSearchForm = () => {
    const [trackingNum, setTrackingNum] = useState("");
    const { info: { number } } = useSelector(selectShipping);
    const dispatch = useDispatch();

    // the input shows the query
    useEffect(() => {
        if (!number) {
            return;
        }
        
        setTrackingNum(number);
    }, [number])

    // controlled input
    const handleInputChange = event => {
        const { value } = event.currentTarget;
        setTrackingNum(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        // fetch shipping info
        dispatch(fetchShipping(trackingNum));
        // add query to history
        dispatch(addNewQuery(trackingNum));
    }

    return (
        <>
            <Desktop>
                <form className={`${css.form} ${css.formD}`} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        pattern="^(5|2)([0-9]{13})$"
                        required
                        title="Номер відправлення має складатися з 14 цифр та починатися з 2 або 5"
                        placeholder="Введіть номер ТТН"
                        className={css.input}
                        onChange={handleInputChange}
                        value={trackingNum}
                    />
                    <button 
                        type="submit"
                        className={`${css.button} ${css.buttonD}`}
                    >
                        Перевірити статус
                    </button>
                </form>
            </Desktop>

            <Tablet>
                <form className={`${css.form} ${css.formT}`} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        pattern="^(5|2)([0-9]{13})$"
                        required
                        title="Номер відправлення має складатися з 14 цифр та починатися з 2 або 5"
                        placeholder="Введіть номер ТТН"
                        className={css.input}
                        onChange={handleInputChange}
                        value={trackingNum}
                    />
                    <button 
                        type="submit"
                        className={`${css.button} ${css.buttonT}`}
                    >
                        Перевірити статус
                    </button>
                </form>
            </Tablet>

            <Mobile>
                <form className={`${css.form} ${css.formM}`} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        pattern="^(5|2)([0-9]{13})$"
                        required
                        title="Номер відправлення має складатися з 14 цифр та починатися з 2 або 5"
                        placeholder="Введіть номер ТТН"
                        className={css.input}
                        onChange={handleInputChange}
                        value={trackingNum}
                    />
                    <button 
                        type="submit"
                        className={`${css.button} ${css.buttonM}`}
                    >
                        Перевірити статус
                    </button>
                </form>
            </Mobile>
        </>
    )
}