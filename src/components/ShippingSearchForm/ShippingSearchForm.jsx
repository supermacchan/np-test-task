import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShipping } from "redux/selectors";
import { fetchShipping } from "redux/operations";

import css from './ShippingSearchForm.module.css';

export const ShippingSearchForm = () => {
    const [trackingNum, setTrackingNum] = useState("");
    const { info: { number } } = useSelector(selectShipping);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!number) {
            return;
        }
        
        setTrackingNum(number);
    }, [number])

    const handleInputChange = event => {
        const { value } = event.currentTarget;
        setTrackingNum(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(fetchShipping(trackingNum));
    }

    return (
        <form className={css.form} onSubmit={handleFormSubmit}>
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
                className={css.button}
            >
                Перевірити статус
            </button>
        </form>
    )
}