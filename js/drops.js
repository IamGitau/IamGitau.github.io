;(function () {
  const drops = window.document.getElementById('drops')
  let count = 0

  function randomLeft() {
    return Math.random() * 100
  }

  while (count < 15) {
    const div = document.createElement('div')

    if (!(count === 0)) {
      div.style.animationDelay = Math.random() + 's'
    }

    div.className = 'bg-blue-300 drop absolute z-10 rounded-lg'
    div.style.left = randomLeft() + '%'

    drops.appendChild(div)
    count++
  }
})()
