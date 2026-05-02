
type CellProps = {
    value: string,
    selected: boolean,
    onSelect: (value: string) => void

}

const Cell = ({ value, selected, onSelect }: CellProps) => {


    return (
        <>
            <input
                type="radio"
                value={value}
                checked={selected}
                onChange={() => onSelect(value)}
                name="bookDate"
                className="accent-company-primary"
            />
        </>
    )
}

export default Cell