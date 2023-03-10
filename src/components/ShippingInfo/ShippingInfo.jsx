import { useSelector } from 'react-redux';
import { selectShipping } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { Desktop, Tablet, Mobile } from "utils/screens";
import css from './ShippingInfo.module.css';

export const ShippingInfo = () => {
    const { isLoading, error, info: { status, sender, recipient } } = useSelector(selectShipping);

    return (
        <>
            <Desktop>
                { !status && 
                    <div className={css.emptyInfoD}>
                        { isLoading && <Loader /> }
                        { error &&
                            <h2 className={`${css.error} ${css.errorD}`}>{error}</h2>
                        }
                    </div> 
                }

                { status && 
                    <div className={css.infoD}>
                        <h2 className={`${css.status} ${css.statusD}`}>Статус доставки: {status}</h2>
                        <p className={`${css.details} ${css.detailsD}`}>Відправлено: {sender}</p>
                        <p className={`${css.details} ${css.detailsD}`}>Отримано: {recipient}</p>
                    </div>         
                }
            </Desktop>
                
            <Tablet>
                { !status && 
                    <div className={css.emptyInfoT}>
                        { isLoading && <Loader /> }
                        { error &&
                            <h2 className={`${css.error} ${css.errorT}`}>{error}</h2>
                        }
                    </div> 
                }

                { status && 
                    <div className={css.infoT}>
                        <h2 className={`${css.status} ${css.statusT}`}>Статус доставки: {status}</h2>
                        <p className={`${css.details} ${css.detailsT}`}>Відправлено: {sender}</p>
                        <p className={`${css.details} ${css.detailsT}`}>Отримано: {recipient}</p>
                    </div>         
                }
            </Tablet>

            <Mobile>
                { !status && 
                    <div className={css.emptyInfoM}>
                        { isLoading && <Loader /> }
                        { error &&
                            <h2 className={`${css.error} ${css.errorM}`}>{error}</h2>
                        }
                    </div> 
                }

                { status && 
                    <div className={css.infoM}>
                        <h2 className={`${css.status} ${css.statusM}`}>Статус доставки: {status}</h2>
                        <p className={`${css.details} ${css.detailsM}`}>Відправлено: {sender}</p>
                        <p className={`${css.details} ${css.detailsM}`}>Отримано: {recipient}</p>
                    </div>         
                }
            </Mobile>
        </>
    )
}