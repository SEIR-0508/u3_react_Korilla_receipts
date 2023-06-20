import './App.css'
import Receipt from './Components/Receipt'

const App = () => {
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

  const showNotPaid = (paid) => {
    const notPaid = receipts.filter(receipt => !receipt.paid)
    return notPaid;
  }
  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Korilla</h1>
      </header>
    
    <div className='receipts'>
      {showNotPaid().map(receipts => (
        <Receipt person={receipts.person}
                  main={receipts.order.main}
                  protein={receipts.order.protein}
                  rice={receipts.order.rice}
                  sauce={receipts.order.sauce}
                  drink={receipts.order.drink}
                  cost={receipts.order.cost}
        />
      ))}
    </div>
    </div>
  )
  
}

export default App
