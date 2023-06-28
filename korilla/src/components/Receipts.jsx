

export default function Reciepts(props) {
    return (
        <div className="receipt-card">
            <p>Customer: {props.person} </p>
            <p>Order Number: {props.order}  </p>
            <p>Main: {props.main}  </p>
            <p>Protein: {props.proitein} </p>
            <p>Rice: {props.rice}  </p>
            <p>Sauce: {props.sauce} </p>
            <p>Drink: {props.drink}  </p>
            <p>Cost: {props.cost}  </p>
        </div>
    )
}