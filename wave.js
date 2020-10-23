const wave = document.querySelector('#wave')

wave.addEventListener('click', function (e) {
  const x = e.clientX - e.target.offsetLeft
  const y = e.clientY - e.target.offsetTop

  const ripples = document.createElement('span')
  ripples.style.left = x + 'px'
  ripples.style.top = y + 'px'
  ripples.classList.add('ko0349930493493')

  // eslint-disable-next-line no-console
  console.log({ x, y })

  this.appendChild(ripples)

  setTimeout(() => {
    ripples.remove()
  }, 1000)
})
