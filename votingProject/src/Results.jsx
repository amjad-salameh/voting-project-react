import "./Results.css";

const Results = ({ options }) => {
  return (
    <div className="results">
      <h2>Results</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <img src={option.img} alt={option.name} className="result-img" />
            {option.name}: {option.votes} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
