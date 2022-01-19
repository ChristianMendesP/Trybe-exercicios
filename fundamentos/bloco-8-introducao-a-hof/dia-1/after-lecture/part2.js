const match = (guessed, randomNumber) => guessed === randomNumber ? 'Parabéns! Você ganhou!' :'Tente novamente';

const raffle = (bet, match) => {
  const rand = Math.ceil(5 *  Math.random());
  const result = match(bet, rand);
  return result;
};

console.log(raffle(3, match));