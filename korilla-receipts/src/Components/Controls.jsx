export default function Controls({ setDisplayAll }) {
  return (
    <div className="buttons">
      <button className="button " onClick={() => setDisplayAll(true)}>
        Display All
      </button>
      <button className="button" onClick={() => setDisplayAll(false)}>
        Display Unpaid
      </button>
    </div>
  );
}
