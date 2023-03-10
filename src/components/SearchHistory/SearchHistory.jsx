import css from './SearchHistory.module.css';

export const SearchHistory = () => {
    return (
        <div className={css.history}>
            <h2 className={css.title}>Історія</h2>
            <ul className={css.list}>
                {/* a list of queries will be here */}
                {/* adding a few test ones temporarily, to adjust the styles */}
                <li className={css.item}>20400048799001</li>
                <li className={css.item}>20400048799002</li>
                <li className={css.item}>20400048799003</li>
            </ul>
        </div>
    )
}