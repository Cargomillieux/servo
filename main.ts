let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function on_forever() {
    
    for (let index = 0; index < 11; index++) {
        angle = (0 + 0) * 0
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
})
