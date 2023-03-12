import { useSelector, useDispatch } from 'react-redux';
import { selectHistory } from 'redux/selectors';
import { fetchShipping } from "redux/operations";
import { clearHistory } from 'redux/historySlice';
import { Desktop, Tablet, Mobile } from "utils/screens";
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
        <>
            <Desktop>
                <div className={css.historyD}>
                    <h2 className={css.titleD}>Історія</h2>
                    <ul className={css.list}>
                        { history.length > 0 && 
                            history.map(item => 
                                <li 
                                    className={css.itemD} 
                                    key={nanoid()}
                                    onClick={handleItemClick}
                                >
                                    {item}
                                </li>)
                        }
                    </ul>
                    { history.length > 0 &&
                        <button 
                            type='button'
                            className={css.buttonD}
                            onClick={handleClearHistory}
                        >
                            Видалити всі
                        </button>
                    }
                </div>
            </Desktop>

            <Tablet>
                <div className={css.historyT}>
                    <h2 className={css.titleT}>Історія</h2>
                    <ul className={css.list}>
                        { history.length > 0 && 
                            history.map(item => 
                                <li 
                                    className={css.itemT} 
                                    key={nanoid()}
                                    onClick={handleItemClick}
                                >
                                    {item}
                                </li>)
                        }
                    </ul>
                    { history.length > 0 &&
                        <button 
                            type='button'
                            className={css.buttonT}
                            onClick={handleClearHistory}
                        >
                            Видалити всі
                        </button>
                    }
                </div>
            </Tablet>

            <Mobile>
                <div className={css.historyM}>
                    <h2 className={css.titleM}>Історія</h2>
                    <ul className={`${css.list} ${css.listM}`}>
                        { history.length > 0 && 
                            history.map(item => 
                                <li 
                                    className={css.itemM} 
                                    key={nanoid()}
                                    onClick={handleItemClick}
                                >
                                    {item}
                                </li>)
                        }
                    </ul>
                    { history.length > 0 &&
                        <button 
                            type='button'
                            className={css.buttonM}
                            onClick={handleClearHistory}
                        >
                            Видалити всі
                        </button>
                    }
                </div>
            </Mobile>
        </>  
    )
}