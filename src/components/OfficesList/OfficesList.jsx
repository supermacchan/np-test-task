import { OfficesListItem } from "components/OfficesListItem/OfficesListItem";

export const OfficesList = () => {
    return (
        <div>
            <ul>
                {/* will show list items below */}
                <OfficesListItem />
                <OfficesListItem />
            </ul>
        </div>
    ) 
}