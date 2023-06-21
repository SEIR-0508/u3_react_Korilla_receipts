import Paid from './paidReceipt'

const Receipts = (props) => {
    if (props.paid) {   
    return <Paid name={props.person}/>
    }else {
        return (
    <div>
        <h1>Customer: {props.person}</h1>
        <h2>Order Number: {props.order}</h2>
        <h3>Main: {props.main}</h3>
        <h3>Protein: {props.protein}</h3>
        <h3>Rice: {props.rice}</h3>
        <h3>Sauce: {props.sauce}</h3>
        <h3>Drink: {props.drink}</h3>
        <h3>Cost: ${props.cost}</h3>
        
    </div>
    )
}}

export default Receipts