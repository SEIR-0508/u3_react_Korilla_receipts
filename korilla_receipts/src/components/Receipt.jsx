const Receipt = (props) => {
    let Paid = props.paid
    console.log(Paid)
    if ( Paid == false) {
    return (
        <div className="receipt">
            <h2> {props.person} </h2>
            <p>Main: {props.main} </p>
            <p>Protein: {props.protein} </p>
            <p>Rice: {props.rice} </p>
            <p>Sauce: {props.sauce} </p>
            <p>Toppings: {props.toppings[0]}, {props.toppings[1]} </p>
            <p>Drink: {props.drink} </p>
            <p>Cost: {props.cost} </p>
        </div>
    ) } else {
        return (
            <div>
            </div>
        )
    }
}

export default Receipt