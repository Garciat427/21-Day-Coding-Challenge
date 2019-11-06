//Challenge #3 - Securing the Vote
const castVote = (name, votes) => {
  if (name === "Tim") {
    votes[0]++;
  } else if (name === "Sally") {
    votes[1]++;
  } else {
    votes[2]++;
  }
  
  return votes;
}
