import { ShippingSearchForm } from "components/ShippingSearchForm/ShippingSearchForm";
import { ShippingInfo } from "components/ShippingInfo/ShippingInfo";
import { SearchHistory } from "components/SearchHistory/SearchHistory";
import { Desktop, Tablet, Mobile } from "utils/screens";
import css from "./LocateShipping.module.css";

const LocateShipping = () => {
    return (
        <section>
            <ShippingSearchForm />

            <Desktop>
                <div className={css.contentD}>
                    <ShippingInfo />
                    <SearchHistory />
                </div>
            </Desktop>

            <Tablet>
                <div className={css.contentT}>
                    <ShippingInfo />
                    <SearchHistory />
                </div>
            </Tablet>
            
            <Mobile>
                <div className={css.contentM}>
                    <ShippingInfo />
                    <SearchHistory />
                </div>
            </Mobile>
        </section>
    )
}

export default LocateShipping;