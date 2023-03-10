import { ShippingSearchForm } from "components/ShippingSearchForm/ShippingSearchForm";
import { ShippingInfo } from "components/ShippingInfo/ShippingInfo";
import { SearchHistory } from "components/SearchHistory/SearchHistory";

const LocateShipping = () => {
    return (
        <>
            <ShippingSearchForm />
            <ShippingInfo />
            <SearchHistory />
        </>
    )
}

export default LocateShipping;