const Receipts = (props) => {
      return !props.paid ? 
      <div className="receipt-card">
            <h2>{props.person}</h2>
            <h3>Order#: {props.id}</h3>
            <p>Main Dish: {props.main}</p>
            <p>Protein: {props.protein}</p>
            <p>Rice: {props.rice}</p>
            <p>Sauce: {props.sauce}</p>
            <p>Drink: {props.drink}</p>
            <p>Cost: ${props.cost}</p>
      </div> : <></>
}

export default Receipts