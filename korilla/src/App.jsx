import "./App.css";
import Receipts from "./components/Receipts";

function App() {
  const receipts = [
    {
      id: 1,
      person: "Jeremy",
      order: {
        main: "Burrito",
        protein: "Skirt Steak",
        rice: "Purple Rice",
        sauce: "Green Crack",
        toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
        drink: "Thai Iced Tea",
        cost: 22,
      },
      paid: false,
    },
    {
      id: 2,
      person: "Tiffany",
      order: {
        main: "Rice Bowl",
        protein: "Ginger Chicken",
        rice: "Sticky Rice",
        sauce: "Korilla",
        toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
        drink: "Korchata",
        cost: 19,
      },
      paid: false,
    },
    {
      id: 3,
      person: "Brittany",
      order: {
        main: "Salad Bowl",
        protein: "Organic Tofu",
        rice: "none",
        sauce: "K'lla",
        toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
        drink: "Sparkling Blood Orange Soda",
        cost: 20,
      },
      paid: false,
    },
    {
      id: 4,
      person: "Tylus",
      order: {
        main: "Burrito Bowl",
        protein: "Carnitas",
        rice: "yellow rice",
        sauce: "Jalapeno Honey",
        toppings: ["Grilled Corn", "Pico De Gallo", "Guacamole"],
        drink: "Pineapple Jarritos",
        cost: 23,
      },
      paid: true,
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>Korilla Receipts</h1>
      </header>

      <div className="app-receipts">
        {receipts.map((receipts) => (
          <div className="receipt-card">
            {
              <Receipts
                person={receipts.person}
                order={receipts.id}
                main={receipts.order.main}
                protein={receipts.order.protein}
                rice={receipts.order.rice}
                sauce={receipts.order.sauce}
                drink={receipts.order.drink}
                cost={receipts.order.cost}
                paid={receipts.paid}
              />
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
