import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {useState} from 'react'
import './App.css'

function App() {
  let receipts = [
    {
      id: 1,
      person: "Jeremy",
      order: {
        main: 'Burrito',
        protein: "Skirt Steak",
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: ['Baby Bok Choy', ' Cucumber Kimchi'],
        drink: 'Thai Iced Tea',
        cost: 22
      },
      paid: false,
      finished: false
    },
    {
      id: 2,
      person: "Tiffany",
      order: {
        main: 'Rice Bowl',
        protein: "Ginger Chicken",
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: ['Yuzu Pickled Sweet Pepper', ' Kale'],
        drink: 'Korchata',
        cost: 19
      },
      paid: true,
      finished: false
    },
    {
      id: 3,
      person: "Brittany",
      order: {
        main: 'Salad Bowl',
        protein: "Organic Tofu",
        rice: 'none',
        sauce: "K'lla",
        toppings: ['Blue Potato Salad', ' Pico De Gallo', ' Red Kimchi'],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
      },
      paid: false,
      finished: true
    },
    { 
      id: 4,
      person: "Tylus",
      order: {
        main: 'Burrito Bowl',
        protein: "Carnitas",
        rice: 'Yellow Rice',
        sauce: 'Jalapeno Honey',
        toppings: ['Grilled Corn', ' Pico De Gallo', " Guacamole"],
        drink: 'Pineapple Jarritos',
        cost: 23
      },
      paid: true,
      finished: false
    }
  ]

  let [myReceipts, setReceipts] = useState(receipts)

  const didPay = id => {
    const updateReceipt = myReceipts.map(obj => {
      if (obj.id === id) {
        if (obj.paid) {
          return {...obj, paid: false}
        } else {
          return {...obj, paid: true}
        }
      }
      return obj
    })

    setReceipts(updateReceipt)
  }

  const didFinish = (id) => {
    const updateReceipt = myReceipts.map(obj => {
      if (obj.id === id) {
        if (obj.finished) {
          return {...obj, finished: false}
        } else {
          return {...obj, finished: true}
        }
      }
      return obj
    })

    setReceipts(updateReceipt)
  }


  return (
    <>
      <div className="App">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-main">
          {myReceipts.map(obj => {
            console.log(obj)
            return (
              <Main key={obj.id} id={obj.id} person={obj.person} main={obj.order.main} protein={obj.order.protein} rice={obj.order.rice} sauce={obj.order.sauce} drink={obj.order.drink} toppings={obj.order.toppings } cost={obj.order.cost} paid={obj.paid} finished={obj.finished} didPay={didPay} didFinish={didFinish}/>
            )
          })}
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
