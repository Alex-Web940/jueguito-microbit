input.onButtonPressed(Button.A, function () {
    Cabeza_dinosaurio.change(LedSpriteProperty.Y, -1)
    Pies_dinosaurio.change(LedSpriteProperty.Y, -1)
    basic.pause(900)
    Cabeza_dinosaurio.change(LedSpriteProperty.Y, 1)
    Pies_dinosaurio.change(LedSpriteProperty.Y, 2)
})
function Piedrita () {
    Piedra = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        Piedra.change(LedSpriteProperty.X, -1)
        if (Piedra.isTouching(Pies_dinosaurio)) {
            music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
            basic.showIcon(IconNames.Angry)
            Piedrita()
        }
    }
}
let Piedra: game.LedSprite = null
let Pies_dinosaurio: game.LedSprite = null
let Cabeza_dinosaurio: game.LedSprite = null
Cabeza_dinosaurio = game.createSprite(0, 3)
Pies_dinosaurio = game.createSprite(0, 4)
Piedrita()
basic.forever(function () {
    if (true) {
        Piedra.ifOnEdgeBounce()
        basic.pause(100)
        Piedra.delete()
        Piedrita()
    }
})
