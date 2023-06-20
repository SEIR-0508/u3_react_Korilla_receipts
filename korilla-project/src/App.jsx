import Review from '../components/Review'
import './App.css'

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
      paid: false,
    },
  ]
  // let cards = document.querySelectorAll('.card')
  // for (let i = 0; i<receipts.length;i++){
  //   console.log(cards)
  //   if (receipts[i].paid === true){
  //     console.log(receipts[i].paid)
  //     document.querySelectorAll('.card')[i].style.display = 'none'
  //   } else {
  //     document.querySelectorAll('.card')[i].style.display = 'block'
  //   }
  // }
  return (
    <div class='cards'>
    {receipts.map(element =>{
      if (element.paid !== true){
      return <Review name={element.person} mainOrder={element.order.main} proteinOrder={element.order.protein}  riceOrder={element.order.rice}  sauceOrder={element.order.sauce} toppingsOrder={element.order.toppings} drinkOrder={element.order.drink} cost={element.order.cost} />
      }
{/*       
      <Review2 name2={receipts[1].person} mainOrder2={receipts[1].order.main} proteinOrder2={receipts[1].order.protein}  riceOrder2={receipts[1].order.rice}  sauceOrder2={receipts[1].order.sauce} toppingsOrder2={receipts[1].order.toppings} drinkOrder2={receipts[1].order.drink} cost2={receipts[1].order.cost} />
      <Review3 name3={receipts[2].person} mainOrder3={receipts[2].order.main} proteinOrder3={receipts[2].order.protein}  riceOrder3={receipts[2].order.rice}  sauceOrder3={receipts[2].order.sauce} toppingsOrder3={receipts[2].order.toppings} drinkOrder3={receipts[2].order.drink} cost3={receipts[2].order.cost} />
      <Review4 name4={receipts[3].person} mainOrder4={receipts[3].order.main} proteinOrder4={receipts[3].order.protein}  riceOrder4={receipts[3].order.rice}  sauceOrder4={receipts[3].order.sauce} toppingsOrder4={receipts[3].order.toppings} drinkOrder4={receipts[3].order.drink} cost4={receipts[3].order.cost} /> */}
    })}
    </div>
  )
}

export default App
