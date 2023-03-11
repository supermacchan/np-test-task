import { useSelector } from "react-redux";
import { selectOffices } from "redux/selectors";
import { OfficesListItem } from "components/OfficesListItem/OfficesListItem";
import { Loader } from 'components/Loader/Loader';
import { nanoid } from 'nanoid';
import css from './OfficesList.module.css';

export const OfficesList = () => {
    const { list, isLoading, error } = useSelector(selectOffices);

    return (
        <div className={css.content}>
            <ul className={css.list}>
                { isLoading && <Loader />}

                { error &&
                    <h2 className={css.error}>{ error }</h2>
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
    ) 
}