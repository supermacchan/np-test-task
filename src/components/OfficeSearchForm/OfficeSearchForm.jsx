export const OfficeSearchForm = () => {
    return (
        <form>
            <input
                type="text"
                name="query"
                placeholder="Введіть назву міста"
            />
            <button type="submit">Показати відділення</button>
        </form>
    )
}