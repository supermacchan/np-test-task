import { ShippingSearchForm } from "components/ShippingSearchForm/ShippingSearchForm";
import { ShippingInfo } from "components/ShippingInfo/ShippingInfo";
import { SearchHistory } from "components/SearchHistory/SearchHistory";
import css from "./LocateShipping.module.css";

const LocateShipping = () => {
    return (
        <section>
            <ShippingSearchForm />
            <div className={css.content}>
                <ShippingInfo />
                <SearchHistory />
            </div>
        </section>
    )
}

export default LocateShipping;