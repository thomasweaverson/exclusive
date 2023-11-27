let basePriceLCDMonitor = 650
let basePriceH1Gamepad = 550

let incBtnLCDMonitor = document.getElementById('incBtnLCDMonitor')
let decBtnLCDMonitor = document.getElementById('decBtnLCDMonitor')

let incBtnH1Gamepad = document.getElementById('incBtnH1Gamepad')
let decBtnH1Gamepad = document.getElementById('decBtnH1Gamepad')

incBtnLCDMonitor.addEventListener('click', function () {
  let currentQuantity =
    document.getElementById('quantityLCDMonitor').textContent
  if (parseInt(currentQuantity) < 9) {
    document.getElementById('quantityLCDMonitor').textContent =
      '0' + (parseInt(currentQuantity) + 1)
  } else {
    document.getElementById('quantityLCDMonitor').textContent = `${
      parseInt(currentQuantity) + 1
    }`
  }
  changeSubTotal(
    parseInt(currentQuantity) + 1,
    document.getElementById('subTotalLCDMonitor'),
    basePriceLCDMonitor
  )
  refreshTotal()
})

decBtnLCDMonitor.addEventListener('click', function () {
  let currentQuantity =
    document.getElementById('quantityLCDMonitor').textContent
  if (parseInt(currentQuantity) > 1) {
    if (parseInt(currentQuantity) <= 10) {
      document.getElementById('quantityLCDMonitor').textContent =
        '0' + (parseInt(currentQuantity) - 1)
    }
    if (parseInt(currentQuantity) > 10) {
      document.getElementById('quantityLCDMonitor').textContent = `${
        parseInt(currentQuantity) - 1
      }`
    }
    changeSubTotal(
      parseInt(currentQuantity) - 1,
      document.getElementById('subTotalLCDMonitor'),
      basePriceLCDMonitor
    )
  }
  refreshTotal()
})


incBtnH1Gamepad.addEventListener('click', function () {
  let currentQuantity =
    document.getElementById('quantityH1Gamepad').textContent
  if (parseInt(currentQuantity) < 9) {
    document.getElementById('quantityH1Gamepad').textContent =
      '0' + (parseInt(currentQuantity) + 1)
  } else {
    document.getElementById('quantityH1Gamepad').textContent = `${
      parseInt(currentQuantity) + 1
    }`
  }
  changeSubTotal(
    parseInt(currentQuantity) + 1,
    document.getElementById('subTotalH1Gamepad'),
    basePriceH1Gamepad
  )
  refreshTotal()
})

decBtnH1Gamepad.addEventListener('click', function () {
  let currentQuantity =
    document.getElementById('quantityH1Gamepad').textContent
  if (parseInt(currentQuantity) > 1) {
    if (parseInt(currentQuantity) <= 10) {
      document.getElementById('quantityH1Gamepad').textContent =
        '0' + (parseInt(currentQuantity) - 1)
    }
    if (parseInt(currentQuantity) > 10) {
      document.getElementById('quantityH1Gamepad').textContent = `${
        parseInt(currentQuantity) - 1
      }`
    }
    changeSubTotal(
      parseInt(currentQuantity) - 1,
      document.getElementById('subTotalH1Gamepad'),
      basePriceH1Gamepad
    )
  }
  refreshTotal()
})






function changeSubTotal(quantity, where, basePrice) {
  where.textContent = `$${quantity * basePrice}`
}
function refreshTotal() {
  let subtotalLCDMonitor = parseInt(document.getElementById('quantityLCDMonitor').textContent) * basePriceLCDMonitor
  let subTotalH1Gamepad = parseInt(document.getElementById('quantityH1Gamepad').textContent) * basePriceH1Gamepad
  let sum = subtotalLCDMonitor + subTotalH1Gamepad
  document.querySelector(".section-cart__total_subtotal").firstElementChild.nextElementSibling.textContent = sum
  document.querySelector(".section-cart__total_total").firstElementChild.nextElementSibling.textContent = sum
}