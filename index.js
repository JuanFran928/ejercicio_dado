const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function throwDice () {
    let randomNumber = randomIntFromInterval(1, 6);

    const diceObject = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
    }

    const numberDiv = document.getElementById("numberDiv");

    numberDiv.innerHTML = diceObject[randomNumber];
}