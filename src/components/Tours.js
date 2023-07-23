import Cards from "./Card.js";

function Tours({ tours, selectcard,removecard }) {
  return (
    <div className="tours">
      {tours.map((tour) => (
        <Cards {...tour} selectcard={selectcard} removecard={removecard} />
      ))}
    </div>
  );
}

export default Tours;
