import Paid from './Paid'
import UnPaid from './UnPaid'


const Receipts = (props) => {
    if (props.paid) {
  return <Paid name={props.paid}/>
} else {
  return (
    <div className="receipt-info">
      <h2>{props.person}</h2>
      <p> Main: {props.main}</p>
      <p>Protein: {props.protein}</p>
      <p>Rice: {props.rice}</p>
      <p>Sauce: {props.sauce}</p>
      <p>Toppings: {props.toppings}</p>
      <p>Drink: {props.drink}</p>
      <p>Cost ${props.cost}</p>
      
    </div>
  )
  }
}
export default Receipts


