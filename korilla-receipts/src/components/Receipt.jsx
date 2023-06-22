
const Receipt = (props) => {
    
console.log(props)
let paid = props.paid
if (paid === false) {
    return (
        <div className="receipt">
            <h1>{props.person}</h1>
            <p>Order: {props.order}</p>
            <p>Main: {props.main}</p>
            <p>Protein: {props.protein}</p>
            <p>Rice: {props.rice}</p>
            <p>Sauce: {props.sauce}</p>
            <p>Drink: {props.drink}</p>
            <p>Cost: {props.cost}</p>      
        </div>
    )
} else {
    return
}
}

export default Receipt
