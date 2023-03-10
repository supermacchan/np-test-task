import { OfficeSearchForm } from "components/OfficeSearchForm/OfficeSearchForm";
import { OfficesList } from "components/OfficesList/OfficesList";
import css from './PostOfficeList.module.css';

const PostOfficeList = () => {
    return (
        <>
            <OfficeSearchForm />
            <div className={css.content}>
                <OfficesList />
            </div>
        </>
    )
}

export default PostOfficeList;