const menu = ['ayam geprek', 'soto ayam', 'nasi goreng', 'mie goreng'];

function chooseMeal(choices) {
  const selectedMeal = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Anda memilih: ${selectedMeal}`);
}

chooseMeal(menu);
