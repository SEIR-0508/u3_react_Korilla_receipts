import './App.css'
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
      paid: true,
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
  ]
  let unpaidReceipts = []
  for (let i=0; i <receipts.length; i++) {
    if (receipts[i].paid === false) {
      unpaidReceipts.push(<div className="receipts"> <Receipt id={receipts[i].id} person={receipts[i].person} main={receipts[i].order.main} protein={receipts[i].order.protein} rice={receipts[i].order.rice} sauce={receipts[i].order.sauce} drink={receipts[i].order.drink} cost={receipts[i].order.cost}/></div>)
    } 
  }
  return (
    <div className="App">
    <header className="App-header">
      <h1>Korilla</h1>
    </header>
    <div className="receipts">
      {unpaidReceipts}
    </div>
    </div>
  )
}

export default App
