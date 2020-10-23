/* globals window */
;(function () {
  // Colors
  const WATER_TOP_COLOR = '#3124F4'
  const WATER_BOTTOM_COLOR = '#3022F8'

  // get elements
  const htmlCanvas = window.document.querySelector('canvas')
  const ctx = htmlCanvas.getContext('2d')
  const ship = window.document.querySelector('#ship')
  const container = document.querySelector('#home-screen')

  let screenWidth, screenHeight, shipComputed, moveWavesId, moveShipId

  const len = 275
  const timeout = 10000

  let waveLength = 0
  let wave = {}
  let wave2 = {}
  let wave3 = {}
  let waves = {}

  function value(x, width, numberOfWaves) {
    x = ((x * numberOfWaves) / width) * 2 * Math.PI
    return Math.sin(x)
  }

  function multiplier(x, width) {
    const multiplierVar = 90

    if (x <= width / 2) {
      return (x * multiplierVar * 2) / width
    }
    return (width * multiplierVar) / 2 / x
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function draw() {
    ctx.clearRect(0, 0, screenWidth, screenHeight)
    ctx.beginPath()
    ctx.moveTo(screenWidth, screenHeight)

    for (let x = waveLength - 1; x > 0; x--) {
      ctx.lineTo(x, waves[x])
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, screenHeight)
    gradient.addColorStop(0.5, WATER_TOP_COLOR)
    gradient.addColorStop(1, WATER_BOTTOM_COLOR)
    ctx.fillStyle = gradient
    ctx.lineTo(0, screenHeight)
    ctx.fill()

    requestAnimationFrame(draw)
  }

  function moveShip() {
    const y1 = waves[shipComputed.left]
    const y2 = waves[shipComputed.left + 1]

    shipComputed.angle = -Math.atan(y1 - y2) + 'rad'
    shipComputed.top = y1
    shipComputed.left += 1
    if (shipComputed.left > screenWidth - 1) {
      shipComputed.left = -10
    }

    ship.style.transform = 'rotate(' + shipComputed.angle + ')'
    ship.style.left =
      shipComputed.left -
      (screenWidth * shipComputed.widthScreenWidthPercent) / 2 +
      'px'
    ship.style.top =
      shipComputed.top -
      screenWidth * shipComputed.widthScreenWidthPercent +
      len +
      'px'
  }

  function initializeWaves() {
    const randomWaves1 = randomIntFromInterval(4, 5)
    const randomWaves2 = randomIntFromInterval(2, 3)
    const randomWaves3 = randomIntFromInterval(6, 7)

    for (let x = 0; x < screenWidth; x++) {
      wave[x] =
        (value(x, screenWidth, randomWaves1) * multiplier(x, screenWidth)) / 4
      wave2[x] =
        (value(x, screenWidth, randomWaves2) * multiplier(x * 3, screenWidth)) /
        6
      wave3[x] = value(x, screenWidth, randomWaves3)
    }
    waveLength = Object.keys(wave).length
  }

  function moveWaves() {
    if (!waveLength) {
      initializeWaves()
    }

    for (let x = waveLength - 1; x >= 0; x--) {
      if (x === 0) {
        wave2[x] = wave2[waveLength - 1]
        wave3[x] = wave3[waveLength - 1]
      } else {
        wave2[x] = wave2[x - 1]
        wave3[x] = wave3[x - 1]
      }

      waves[x] = wave[x] + wave2[x] + wave3[x] + screenHeight / 2
    }
  }

  function startLoop() {
    clearInterval(moveWavesId)
    moveWavesId = setInterval(moveWaves, (timeout - 1000) / screenWidth)

    clearInterval(moveShipId)
    moveShipId = setInterval(moveShip, timeout / screenWidth)
  }

  function recalculateCanvas() {
    const containerInfo = container.getBoundingClientRect()
    screenWidth = containerInfo.width
    screenHeight = containerInfo.height
    htmlCanvas.width = screenWidth
    htmlCanvas.height = screenHeight - len

    wave = {}
    wave2 = {}
    wave3 = {}
    waveLength = 0
    waves = {}

    shipComputed = {
      top: screenHeight / 2,
      left: -10,
      widthScreenWidthPercent: 0.07,
    }
    startLoop()
  }

  // window.addEventListener('resize', recalculateCanvas)
  // window.addEventListener('orientationchange', recalculateCanvas)
  window.removeEventListener('unload', recalculateCanvas)

  recalculateCanvas()
  requestAnimationFrame(draw)
})()
