let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function on_forever() {
    
    for (let index = 0; index < 17; index++) {
        angle = index * 10 + 10
        servos.P0.setAngle(angle)
        basic.pause(150)
        if (index == 16) {
            for (index = 0; index < 17; index++) {
                angle = index / 10 + 10
                servos.P0.setAngle(angle)
                basic.pause(150)
            }
        }
        
    }
})
