const Order = (props) => {
    console.log(props)
    return (
        <div className="order-itmes">
            <h1>Korilla</h1>

            <ul>
                {props.Receipt.map((Receipt =>
            <li key={Receipt.key}>
                <h2>{Receipt.person}</h2>
                <h3>Order:</h3>
                <h3>main: {Receipt.order.main}</h3>
                <h3>protein: {Receipt.order.protein}</h3>
                <h3>rice: {Receipt.order.rice}</h3>
                <h3>sauce: {Receipt.order.sauce}</h3>
                <h3>toppings {Receipt.order.toppings}</h3>
                <h3>drinks: {Receipt.order.drink}</h3>
                <h3>const: {Receipt.order.cost}</h3>
            </li>

                ))}
            
            </ul>

            </div>
    )
}
export default Order