const Receipt = (props) => {

    console.log(props)

    let paid = props.paid

    if(paid === false) {
        return (
            <div className='receiptDiv'>
                <h2>{props.person}</h2>
                <hr></hr>
                <div className='contents'>
                    <h3>Main:</h3>
                    <p>{props.main}</p>
                    <h3>Protein:</h3>
                    <p>{props.protein}</p>
                    <h3>Rice:</h3>
                    <p>{props.rice}</p>
                    <h3>Sauce:</h3>
                    <p>{props.sauce}</p>
                    <h3>Drink:</h3>
                    <p>{props.drink}</p>
                </div>
                    <hr></hr>
                <div className='total'>
                    <h3>Total:</h3>
                    <p>${props.cost}</p>
                </div>  
            </div>
        )
    } else{
        return;
    }
}

export default Receipt