/* MAGIC BIT

let strip = neopixel.create(DigitalPin.P16, 32, NeoPixelMode.RGB)
strip.setBrightness(20)


strip.showRainbow(180, 360)


input.onButtonPressed(Button.A, function() {
    
    strip.rotate(2)
    strip.show()
})

input.onButtonPressed(Button.B, function() {

    strip.rotate(30)
    strip.show()
})

input.onButtonPressed(Button.AB, function() {
    strip.clear()
    strip.show()
})

*/

// bomba ultrasonic snimac haha :)
// Kazda:
function ping(trig: DigitalPin, echo: DigitalPin, maxCmDistance = 500): number {
pins.setPull(trig, PinPullMode.PullNone);
    pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
    pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
    pins.digitalWritePin(trig, 0);

const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

let sosCoef = 1 / ((331 + 0,607 * (25 - 4)) / 10000 / 2)

    return Math.round(d / sosCoef)

}
basic.forever(function() {
    let data = ping(DigitalPin.P8, DigitalPin.P12)
    console.logValue("echo time", data)
    basic.pause(50)

})

// je to pomalé, myslet na to