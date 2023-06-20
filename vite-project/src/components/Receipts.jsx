import '../App.css'

function Receipts(){

    const receipts = [
        {
          id: 1,
          person: 'Ali',
          order: {
            main: 'Burrito',
            protein: 'Impossible Steak',
            rice: 'Purple Rice',
            sauce: 'Green Crack',
            toppings: ['Baby Bok Choy', 'Sprinkles'],
            drink: 'Thai Iced Tea',
            cost: 22,
          },
          paid: false,
        },
        {
          id: 2,
          person: 'Jenin',
          order: {
            main: 'Shawarma',
            protein: 'Steak',
            rice: 'Sticky Rice',
            sauce: 'Korilla',
            toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
            drink: 'Korchata',
            cost: 19,
          },
          paid: true,
        },
        {
          id: 3,
          person: 'Gabe',
          order: {
            main: 'Salad Bowl',
            protein: 'Organic Tofu',
            rice: 'none',
            sauce: "K'lla",
            toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
            drink: 'Sparkling Blood Orange Soda',
            cost: 20,
          },
          paid: false,
        },
        {
          id: 4,
          person: 'Brandon',
          order: {
            main: 'Burrito Bowl',
            protein: 'Carnitas',
            rice: 'Yellow Rice',
            sauce: "Jalapeno Honey",
            toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
            drink: 'Pineapple Jarritos',
            cost: 23,
          },
          paid: true,
        },
      ]

    return(
        <div className='receipts-container'>
            {receipts.map((receipt,index)=>(
                receipt.paid === false ? (
                <div className='receipt' key={index}>
                    <h2>Name: {receipt.person}</h2>
                    <p>Item: {receipt.order.main}</p>
                    <p>Protein: {receipt.order.protein}</p>
                    <p>Rice: {receipt.order.rice}</p>
                    <p>Sauce: {receipt.order.sauce}</p>
                    <div className='toppings-container'>
                        <p>Toppings:</p>
                        <div className='toppings'>
                            {receipt.order.toppings.map((topping,index)=>(
                                <p className='topping' key={index}>{topping}</p>
                            ))}
                        </div>
                    </div>
                    <p>Drink: {receipt.order.main}</p>
                    <p>Cost: ${receipt.order.cost}</p>
                </div>
                ) :
                null                
            ))}
        </div>
    )
}

export default Receipts