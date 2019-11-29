const rand = n => Math.round(n * Math.random());

function throwOneCoin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(rand(2) > 1 ? "cara..." : "cruz!"), 1000)
  })
}

throwOneCoin()
  .then(console.log)
  .catch(console.log)