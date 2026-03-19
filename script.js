// INITIALIZE consts rock, paper, scissors
// USE Math.random to return 0 or 1 or 2
// IF random = 0 return rock
// IF random = 1 return paper
// IF random = 2 return scissors

function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    const max = 3;
    const random = Math.floor(Math.random() * max);

    if (random === 0)
    {
        return rock;
    }
    else if (random === 1)
    {
        return paper;
    }
    else 
    {
        return scissors;
    }
}

console.log(getComputerChoice())