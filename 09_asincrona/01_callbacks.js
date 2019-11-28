const rand = n => Math.round(n * Math.random());
const coin = () => rand(1) > 1;
const rarely = () => rand(7) > 7;

function fail(test, reason) {
  return test() ? new Error(`Error: ${reason}`) : null;
}

function getPlayers(callback) {
  const players = ['Fry', 'Bender', 'Leela', 'Amy', 'Zoidberg'];
  setTimeout(() => callback(fail(coin, 'getPlayers'), players), 100);
}

function throwDice(callback) {
  setTimeout(() => callback(fail(rarely, 'throwDice'), 1 + rand(6)), 100);
}

const board = [];

function savePlayerScore(score, callback) {
  setTimeout(() => {
    if (coin())
      callback(new Error('Error: savePlayerScore'));
    else {
      board.push(score);
      callback(null);
    }
  }, 100);
}

function getScoreBoard(callback) {
  setTimeout(() => callback(fail(coin, 'getScoreBoard'), board), 100);
}


getPlayers((err, players) => {
  if (err) console.log(err.message)
  else {
    let totalSavedScores = players.length
    players.forEach(player => {
        throwDice((err, throw1) => {
          if (err) console.log(err.message)
          else {
            throwDice((err, throw2) => {
              if (err) console.log(err.message)
              else {
                let playerScore = {name: player, score: [throw1, throw2]}
                savePlayerScore(playerScore, (err) => {
                  if (err) console.log(err.message)
                  else {
                    totalSavedScores--
                    if (totalSavedScores === 0) {
                      getScoreBoard((err, result) => {
                        if (err) console.log(err.message)
                        else console.log(result)
                      })
                    }
                  }
                })
              }
            })
          }
        })
      }
    )
  }
})

