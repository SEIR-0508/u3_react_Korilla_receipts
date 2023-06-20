const Receipt = (props) => {
    return (
        <div class="individualReceipt">
            <h2 class="person">Person: {props.person}</h2>
            <p>ID: {props.id}</p>
            <p>Main: {props.main}</p>
            <p>Protein: {props.protein}</p>
            <p>Rice: {props.rice}</p>
            <p>Sauce: {props.sauce}</p>
            <p>Drink: {props.drink}</p>
            <p>Cost: ${props.cost}</p>
        </div>
    )
}

export default Receipt