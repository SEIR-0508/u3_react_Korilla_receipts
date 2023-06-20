const Receipt = (props) => {

    return (
        <div className="ind-receipt">
            <h2>{props.person}</h2>
            <p><span>Main:</span> {props.main}</p>
            <p><span>Protein:</span> {props.protein}</p>
            <p><span>Rice:</span> {props.rice}</p>
            <p><span>Sauce:</span> {props.sauce}</p> 
            <p><span>Drink:</span> {props.drink}</p>
            <p><span>Cost:</span> {props.cost}</p>
        </div>
    )
}

export default Receipt