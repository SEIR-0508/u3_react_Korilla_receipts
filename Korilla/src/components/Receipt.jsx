const Receipt = (props) => {
    return (
        <div class="individualReceipt">
            <h2 class="person">Person: {props.person}</h2>
            <p><strong>ID:</strong> {props.id}</p>
            <p><strong>Main:</strong> {props.main}</p>
            <p><strong>Protein:</strong> {props.protein}</p>
            <p><strong>Rice:</strong> {props.rice}</p>
            <p><strong>Sauce:</strong> {props.sauce}</p>
            <p><strong>Drink:</strong> {props.drink}</p>
            <p><strong>Cost:</strong> ${props.cost}</p>
        </div>
    )
}

export default Receipt