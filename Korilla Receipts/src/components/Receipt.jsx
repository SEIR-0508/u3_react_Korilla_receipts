export default function Receipt (props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>Main: {props.main} </h3>
            <h3>Protein: {props.protein} </h3>
            <h3>Rice: {props.rice} </h3>
            <h3>Sauce: {props.sauce} </h3>
            <h3>Drink: {props.drink} </h3>
            <h3>Cost: {props.cost} </h3>
        </div>
    )
}