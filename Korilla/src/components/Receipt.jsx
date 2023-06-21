const Receipt = (props) => {

    return (
        <div>
            <div>
                <h1>person: {props.person}</h1>
            </div>
            <div>
                <p>main: {props.main}</p>
                <p>protein: {props.protein}</p>
                <p>rice: {props.rice}</p>
                <p>sauce: {props.sauce}</p>
                <p>drink: {props.drink}</p>
                <p>cost: {props.cost}</p>
            </div>
        </div>
    )
}

export default Receipt