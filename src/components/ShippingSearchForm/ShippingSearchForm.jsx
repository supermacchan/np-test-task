export const ShippingSearchForm = () => {
    return (
        <form>
            <input
                type="text"
                name="query"
                placeholder="Введіть номер ТТН"
            />
            <button type="submit">Перевірити статус</button>
        </form>
    )
}