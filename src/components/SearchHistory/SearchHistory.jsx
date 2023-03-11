import { useSelector, useDispatch } from 'react-redux';
import { selectHistory } from 'redux/selectors';
import { fetchShipping } from "redux/operations";
import { clearHistory } from 'redux/historySlice';
import { nanoid } from 'nanoid';
import css from './SearchHistory.module.css';

export const SearchHistory = () => {
    const history = useSelector(selectHistory);
    const dispatch = useDispatch();

    const handleItemClick = (event) => {
        dispatch(fetchShipping(event.target.innerText));
    }

    const handleClearHistory = () => {
        dispatch(clearHistory());
    }

    return (
        <div className={css.history}>
            <h2 className={css.title}>Історія</h2>
            <ul className={css.list}>
                { history.length > 0 && 
                    history.map(item => 
                        <li 
                            className={css.item} 
                            key={nanoid()}
                            onClick={handleItemClick}
                        >
                            {item}
                        </li>)
                }
            </ul>
            <button 
                type='button'
                className={css.button}
                onClick={handleClearHistory}
            >
                Видалити всі
            </button>
        </div>
    )
}