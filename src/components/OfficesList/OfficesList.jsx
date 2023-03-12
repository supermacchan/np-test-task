import { useSelector } from "react-redux";
import { selectOffices } from "redux/selectors";
import { OfficesListItem } from "components/OfficesListItem/OfficesListItem";
import { Loader } from 'components/Loader/Loader';
import { Desktop, Tablet, Mobile } from "utils/screens";
import { nanoid } from 'nanoid';
import css from './OfficesList.module.css';

export const OfficesList = () => {
    const { list, isLoading, error } = useSelector(selectOffices);

    return (
        <>
            <Desktop>
                <div className={`${css.content} ${css.contentD}`}>
                    <ul className={`${css.list} ${css.listD}`}>
                        { isLoading && <Loader />}

                        { error &&
                            <h2 className={`${css.error} ${css.errorD}`}>{ error }</h2>
                        }

                        { list.length > 0 && 
                            list.map(office => 
                                <OfficesListItem 
                                    key={nanoid()}
                                    num={office.number}
                                    address={office.address}
                                />)
                        }
                    </ul>
                </div>
            </Desktop>
        
            <Tablet>
                <div className={`${css.content} ${css.contentT}`}>
                    <ul className={`${css.list} ${css.listT}`}>
                        { isLoading && <Loader />}

                        { error &&
                            <h2 className={`${css.error} ${css.errorT}`}>{ error }</h2>
                        }

                        { list.length > 0 && 
                            list.map(office => 
                                <OfficesListItem 
                                    key={nanoid()}
                                    num={office.number}
                                    address={office.address}
                                />)
                        }
                    </ul>
                </div>
            </Tablet>

            <Mobile>
                <div className={`${css.content} ${css.contentM}`}>
                    <ul className={`${css.list} ${css.listM}`}>
                        { isLoading && <Loader />}

                        { error &&
                            <h2 className={`${css.error} ${css.errorM}`}>{ error }</h2>
                        }

                        { list.length > 0 && 
                            list.map(office => 
                                <OfficesListItem 
                                    key={nanoid()}
                                    num={office.number}
                                    address={office.address}
                                />)
                        }
                    </ul>
                </div>
            </Mobile>
        </>
        
    ) 
}