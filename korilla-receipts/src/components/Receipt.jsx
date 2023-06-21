const Receipt = (props) => {
    const order = props.order
    const toppings = order.toppings
    return (
        <div className="receipt">
            <h2>{props.person}</h2>
            <ul>
                <li><span>Main: </span>{order.main}</li>
                <li><span>Protein: </span>{order.protein}</li>
                <li><span>Rice: </span>{order.rice}</li>
                <li><span>Sauce: </span>{order.sauce}</li>
                <li><span>Drink: </span>{order.drink}</li>
                <li><span>Cost: </span>{order.cost}</li>
                <li><span>Toppings: </span>{toppings.slice(0, -1).map(topping =><div className="topping">{topping}, </div>)}{toppings[toppings.length-1]}</li>
                {/* <li><span>Toppings: </span>{props.order.toppings}</li> */}
                <li><span>Status: </span>{ props.paid ? 'Paid' : 'Unpaid'}</li>
            </ul>
        </div>

    )
}

export default Receipt