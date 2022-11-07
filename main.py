angle = 0
servos.P0.set_range(10, 170)

def on_forever():
    global angle
    for index in range(11):
        angle = (0 + 0) * 0
        servos.P0.set_angle(angle)
        basic.pause(100)
basic.forever(on_forever)
