import { Desktop, Tablet, Mobile } from "utils/screens";
import css from './OfficesListItem.module.css';

export const OfficesListItem = ({ num, address }) => {
    return (
        <li className={css.item}>
            <Desktop>
                <p className={css.numberD}>Відділення № {num}</p>
                <p className={css.addressD}>Адреса: {address}</p>
            </Desktop>
            
            <Tablet>
                <p className={css.numberT}>Відділення № {num}</p>
                <p className={css.addressT}>Адреса: {address}</p>
            </Tablet>

            <Mobile>
                <p className={css.numberM}>Відділення № {num}</p>
                <p className={css.addressM}>Адреса: {address}</p>
            </Mobile>
        </li>
    )
}