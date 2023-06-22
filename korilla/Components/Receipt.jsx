const Recipet =(props) => {
    <div className="receipt-card">
        <h2>{props.person}</h2>
        <p>Main: {props.order.main} </p>
        <p>Protein: {props.order.protein} </p>
        <p>Rice: {props.order.rice} </p>
        <p>Sauce: {props.order.sauce} </p>
        <p>Drink: {props.order.drink} </p>
        <p>Cost: {props.order.cost} </p>


    </div>
}
export default Reciept