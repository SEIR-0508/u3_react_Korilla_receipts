import './App.css'
import receipt from './components/Receipt';
import Receipt from './components/Receipt'

function App() {
  const receipts = [
    {
      id: 1,
      person: 'Jeremy',
      order: {
        main: 'Burrito',
        protein: 'Skirt Steak',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
        drink: 'Thai Iced Tea',
        cost: 22,
      },
      paid: false,
    },
    {
      id: 2,
      person: 'Tiffany',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Chicken',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
        drink: 'Korchata',
        cost: 19,
      },
      paid: false,
    },
    {
      id: 3,
      person: 'Brittany',
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
      person: 'Tylus',
      order: {
        main: 'Burrito Bowl',
        protein: 'Carnitas',
        rice: 'yellow rice',
        sauce: "Jalapeno Honey",
        toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
        drink: 'Pineapple Jarritos',
        cost: 23,
      },
      paid: true,
    },
  ];

  

  return (
    <>
      <div>
        <h1>Korilla</h1>
        <div className='receipts'>
          {receipts.map((receipt) => {
            if (receipt.paid === false) {
              return (
                <Receipt
                  key={receipt.id}
                  person={receipt.person}
                  main={receipt.order.main}
                  protein={receipt.order.protein}
                  rice={receipt.order.rice}
                  sauce={receipt.order.sauce}
                  toppings={receipt.order.toppings}
                  drink={receipt.order.drink}
                  cost={receipt.order.cost}
                />
              )
            }
            return null
          })}
        </div>
      </div>
    </>
  )
  
}

export default App
