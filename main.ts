radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("temp", receivedNumber)
    basic.showNumber(receivedNumber)
})
let temp = 0
radio.setGroup(1)
basic.showIcon(IconNames.Chessboard)
basic.showString("START")
basic.forever(function () {
    temp = input.temperature()
    radio.sendNumber(temp)
})
