import React from 'react';
import './App.css';

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
      price: 22,
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
      price: 19,
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
      price: 20,
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
      price: 23,
    },
    paid: false,
  },
];

const Receipt = ({ receipt }) => {
  const { person, order } = receipt;

  return (
    <div className="receipt">
      <h3>{person}</h3>
      <p> {order.main}</p>
      <p>Protein: {order.protein}</p>
      <p>Rice: {order.rice}</p>
      <p>Sauce: {order.sauce}</p>
      <p>Drink: {order.drink}</p>
      <p>Price: ${order.price}</p>
      {order.toppings && order.toppings.length > 0 && (
        <div>
          <p>Toppings:</p>
          <ul>
            {order.toppings.map((topping, index) => (
              <li key={index}>{topping}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
function App() {
  const unpaidReceipts = receipts.filter((receipt) => !receipt.paid);

  return (
    <div>
     {unpaidReceipts.map((receipt, index) => (
  <Receipt key={index} receipt={receipt} />
))}
    </div>
  );
 }


export default App;


//i used these websites to teach myself map() https://www.simplilearn.com/tutorials/reactjs-tutorial/map-in-reactjs
//https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering