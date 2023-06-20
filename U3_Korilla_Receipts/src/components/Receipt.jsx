
export default function Receipt (props) {
    if (props.paid === true){
    return (
        <div className='receipt'>
           <h2>{props.person}</h2> 
           <p>main: {props.main}</p>
           <p>protein: {props.protein}</p>
           <p>rice: {props.rice}</p>
           <p>sauce: {props.sauce}</p>
           <p>toppings: {props.toppings}</p>
           <p>drink: {props.drink}</p>
           <p>cost: {props.cost}</p>
        </div>
    )
    }
}