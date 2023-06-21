const Receipt = (props) => {
  const receipt = props.receipt
  console.log(receipt)
  return (
    <div>
      <h1>Name: {receipt.person}</h1>
      <h2>Main: {receipt.order.main}</h2>
      <h2>Protein: {receipt.order.protein}</h2>
      <h2>Rice: {receipt.order.rice}</h2>
      <h2>Sauce: {receipt.order.sauce}</h2>
      <h2>Toppings: {receipt.order.toppings}</h2>
      <h2>Drink: {receipt.order.drink}</h2>
      <h2>Cost: $ {receipt.order.cost}</h2>
    </div>
  )
}

export default Receipt