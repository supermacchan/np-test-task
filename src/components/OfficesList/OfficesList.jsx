import { OfficesListItem } from "components/OfficesListItem/OfficesListItem";
import css from './OfficesList.module.css';

export const OfficesList = () => {
    return (
        <div className={css.content}>
            <ul className={css.list}>
                {/* will show list items below */}
                <OfficesListItem />
                <OfficesListItem />
            </ul>
        </div>
    ) 
}