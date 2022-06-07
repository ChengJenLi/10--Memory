function 燈數 (num: number, 亮度: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plotBrightness(x, y, 亮度)
}
input.onButtonPressed(Button.A, function () {
    if (run == 2) {
        List_U[answer] = !(List_U[answer])
    }
})
input.onButtonPressed(Button.AB, function () {
    if (run == 0) {
        run = 1
        score = 0
        answer = 0
    } else if (run == 2) {
        for (let index = 0; index <= 24; index++) {
            if (List_G[index] != List_U[index]) {
                run = 0
                basic.showNumber(score)
            }
        }
        if (run == 2) {
            run = 1
            score += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (run == 2) {
        basic.clearScreen()
        for (let index = 0; index <= 24; index++) {
            if (List_U[index]) {
                燈數(index + 1, 30)
            }
        }
        answer += 1
        if (answer > 24) {
            answer = 0
        }
        燈數(answer + 1, 255)
    }
})
let a = 0
let n = 0
let List_G: boolean[] = []
let score = 0
let answer = 0
let List_U: boolean[] = []
let y = 0
let x = 0
let run = 0
run = 0
basic.forever(function () {
    if (run == 1) {
        basic.clearScreen()
        List_G = []
        List_U = []
        for (let index = 0; index < 25; index++) {
            List_G.push(false)
            List_U.push(false)
        }
        n = 0
        while (n < 3) {
            a = randint(0, 24)
            if (!(List_G[a])) {
                List_G[a] = true
                n += 1
                燈數(a + 1, 255)
            }
        }
        basic.pause(2000)
        basic.clearScreen()
        run = 2
    }
})
