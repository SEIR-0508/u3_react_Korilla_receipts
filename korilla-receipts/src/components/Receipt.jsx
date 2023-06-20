const Receipt = (props) => {

    console.log(props.receipt)
  if (props.receipt.paid == true) {
    return (
    
           <div className="receiptMainContainer">
            <h2>{props.receipt.person}</h2>
            <p><b>Main: </b>{props.receipt.order.main}</p>
            <p><b>Protein:</b> {props.receipt.order.protein}</p>
            <p><b>Rice: </b>{props.receipt.order.rice}</p>
            <p><b>Sauce:</b> {props.receipt.order.sauce}</p>
            <p><b>Toppings:</b> {props.receipt.order.toppings}</p>
            <p><b>Drink: </b>{props.receipt.order.drink}</p>
            <p><b>Cost:</b> {props.receipt.order.cost}</p>
          </div>
        
    )
  }else {
    <div>
        <h1>Receipt is not here yet</h1>
    </div>
  }
}

export default Receipt