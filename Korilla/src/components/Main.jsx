import Paid from './Paid'
import NotPaid from './NotPaid'

export default function Main (props) {
    return props.paid ? 
    <Paid id={props.id} person={props.person} main={props.main} protein={props.protein} rice={props.rice} sauce={props.sauce} topping={props.toppings} drink={props.drink} cost={props.cost} finished={props.finished} didPay={props.didPay} didFinish={props.didFinish}/>
    : 
    <NotPaid id={props.id} person={props.person} main={props.main} protein={props.protein} rice={props.rice} sauce={props.sauce} topping={props.toppings} drink={props.drink} cost={props.cost} finished={props.finished} didPay={props.didPay} didFinish={props.didFinish}/>
}