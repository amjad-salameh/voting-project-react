import "./VoteOption.css";

const VoteOption = ({ option, onVote }) => {
  return (
    <div className="vote-option">
      <img src={option.img} alt={option.name} className="option-img" />
      <span className="option-name">{option.name}</span>
      <button className="vote-button" onClick={() => onVote(option.id)}>
        Vote
      </button>
      <span className="vote-count">Votes: {option.votes}</span>
    </div>
  );
};

export default VoteOption;
