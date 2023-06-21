export default function Paid (props) {
    if (!props.finished) {
        return (
            <>
                <div className="Paid receipt">
                    <a onClick={e => {e.preventDefault(), props.didPay(props.id)}}><h1>{props.person}</h1></a>
                    <div className="receiptBody" onClick={e => {e.preventDefault(), props.didFinish(props.id)}}>
                        <p><span>Main:</span> {props.main}</p>
                        <p><span>Protein:</span>{props.protein}</p>
                        <p><span>Rice:</span> {props.rice}</p>
                        <p><span>Sauce:</span> {props.sauce}</p>
                        <p><span>Toppings:</span>{props.toppings + ""} </p>
                        <p><span>Drink:</span> {props.drink}</p>
                        <p><span>Cost:</span> {props.cost}</p>
                    </div>
                </div>
            </>
        )
    }

}