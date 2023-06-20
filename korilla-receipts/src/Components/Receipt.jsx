export default function Receipt({ id, person, order }) {
  const { main, protein, rice, sauce, toppings, drink, cost } = order;
  return (
    <div className="receipt">
      <h1>{person}</h1>
      <h3>Main: {main}</h3>
      <h3>Protein: {protein}</h3>
      <h3>Rice: {rice}</h3>
      <h3>Sauce: {sauce}</h3>
      <h3>Drink: {drink}</h3>
      <h3>Cost: {cost}</h3>
    </div>
  );
}
