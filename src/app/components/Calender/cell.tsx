
type CellProps = {
    date: number
}

const Cell = ({ date }: CellProps) => {


    return (
        <div className="text-center">
            <input type="radio" value={date} className="accent-company-primary" />
        </div>
    )
}

export default Cell