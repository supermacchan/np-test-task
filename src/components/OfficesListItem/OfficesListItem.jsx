import { Desktop, Tablet, Mobile } from "utils/screens";
import css from './OfficesListItem.module.css';

export const OfficesListItem = ({ num, address }) => {
    return (
        <li className={css.item}>
            <Desktop>
                <p className={`${css.number} ${css.numberD}`}>Відділення № {num}</p>
                <p className={`${css.address} ${css.addressD}`}>Адреса: {address}</p>
            </Desktop>
            
            <Tablet>
                <p className={`${css.number} ${css.numberT}`}>Відділення № {num}</p>
                <p className={`${css.address} ${css.addressT}`}>Адреса: {address}</p>
            </Tablet>

            <Mobile>
                <p className={`${css.number} ${css.numberM}`}>Відділення № {num}</p>
                <p className={`${css.address} ${css.addressM}`}>Адреса: {address}</p>
            </Mobile>
        </li>
    )
}