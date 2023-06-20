import './App.css'
import Receipt from './components/receipts'
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
];


const App = () => {

  return (
    <div>
      <header className='appHeader'>
        <h1>Paid Tabs</h1>
      </header>
      <main className='appMain'>
      
      <Receipt 
      id={receipts[0].id} 
      person={receipts[0].person} 
      orderProtein={receipts[0].order.protein}
      orderRice={receipts[0].order.rice}
      orderSauce={receipts[0].order.sauce}
      orderToppings={receipts[0].order.toppings[0]}
      orderDrink={receipts[0].order.drink}
      orderCost={receipts[0].order.cost}
      paid={receipts[0].paid}
      />

      <Receipt 
      id={receipts[1].id} 
      person={receipts[1].person} 
      orderProtein={receipts[1].order.protein}
      orderRice={receipts[1].order.rice}
      orderSauce={receipts[1].order.sauce}
      orderToppings={receipts[1].order.toppings[1]}
      orderDrink={receipts[1].order.drink}
      orderCost={receipts[1].order.cost}
      paid={receipts[1].paid}
      />

      <Receipt 
      id={receipts[2].id} 
      person={receipts[2].person} 
      orderProtein={receipts[2].order.protein}
      orderRice={receipts[2].order.rice}
      orderSauce={receipts[2].order.sauce}
      orderToppings={receipts[2].order.toppings[2]}
      orderDrink={receipts[2].order.drink}
      orderCost={receipts[2].order.cost}
      paid={receipts[2].paid}
      />

      <Receipt 
      id={receipts[3].id} 
      person={receipts[3].person} 
      orderProtein={receipts[3].order.protein}
      orderRice={receipts[3].order.rice}
      orderSauce={receipts[3].order.sauce}
      orderToppings={receipts[3].order.toppings[3]}
      orderDrink={receipts[3].order.drink}
      orderCost={receipts[3].order.cost}
      paid={receipts[3].paid}
      />
      </main>
    </div>


  )
}

export default App
