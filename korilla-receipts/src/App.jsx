import "./App.css";
import Receipt from "./Components/Receipt";
import Header from "./Components/Header";
import Controls from "./Components/Controls";
import { useState } from "react";

function App() {
  const [displayAll, setDisplayAll] = useState(true);
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
    <>
      <Header />
      <Controls setDisplayAll={setDisplayAll} />
      <div className="receipts">
        {displayAll
          ? receipts.map((receipt) => (
              <Receipt
                key={receipt.id}
                id={receipt.id}
                person={receipt.person}
                order={receipt.order}
              />
            ))
          : receipts.map((receipt) =>
              !receipt.paid ? (
                <Receipt
                  key={receipt.id}
                  id={receipt.id}
                  person={receipt.person}
                  order={receipt.order}
                />
              ) : null
            )}
      </div>
    </>
  );
}

export default App;
