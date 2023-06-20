const Receipt = (props) =>{

if (props.paid)
{
return(
    <div className="appMain">
        <h1>Customer Number #{props.id}</h1>
        <p>Name: {props.person}</p>
        <p>Protein: {props.orderProtein}</p>
        <p>Rice: {props.orderRice}</p>
        <p>Sauce: {props.orderSauce}</p>
        <p>Toppings: {props.orderToppings}</p>
        <p>Drink {props.orderDrink}</p>
        <p>Cost ${props.orderCost}</p>    
    </div>
)
}
}
export default Receipt