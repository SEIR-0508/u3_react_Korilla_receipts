export default function Review(props){
    return(
        <div class='card'>
            <h1>Person: {props.name}</h1>
            <p>{props.mainOrder}</p>
            <p>{props.proteinOrder}</p>
            <p>{props.riceOrder}</p>
            <p>{props.sauceOrder}</p>
            <p>{props.toppingsOrder}</p>
            <p>{props.drinkOrder}</p>
            <p>{props.cost}</p>
        </div>
    )
}