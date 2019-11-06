//Challenge #4 - This is How You Remind Me (To Register To Vote)
const registerToVote = (name, unregisteredVoters) => {
  let indexSel = unregisteredVoters.indexOf(name);
  unregisteredVoters.splice(indexSel,1);
  return(unregisteredVoters);
}
