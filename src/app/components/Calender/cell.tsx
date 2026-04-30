
type CellProps = {
    date: number
}

const Cell = ({ date }: CellProps) => {


    return (
        <>
            <input type="radio" value={date} name="bookDate" className="accent-company-primary" />
        </>
    )
}

export default Cell