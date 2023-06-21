const Receipt = (props) => {

    const toppingBreakdown = props.toppings.map((top) =>  top += ", ");
    toppingBreakdown[toppingBreakdown.length-1] = props.toppings[toppingBreakdown.length-1]


    


    return (
        !props.paid ? <div> 
            <h2> {props.person}</h2>
        <p> <span> Main: </span> {props.main} </p>
            <p> <span> Protein: </span> {props.protein} </p>
            <p> <span> Rice: </span> {props.rice} </p>
            <p> <span> Sauce: </span> {props.sauce} </p>
            <p> <span> Drink: </span> {props.drink} </p>
            <p> <span> Toppings: </span> {toppingBreakdown} </p>
            <p> <span> Cost: </span>{props.cost} </p>
        </div> : <></>
    )


} 

export default Receipt