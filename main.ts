sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    football.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.changeScoreBy(1)
    info.startCountdown(10)
})
let football: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
. . . . 2 2 2 2 2 e . . . . . . 
. . . 2 2 2 2 d 2 2 e . . . . . 
. . e 2 2 2 2 2 2 2 e . . . . . 
. . e 2 2 2 2 2 2 2 e . . . . . 
. . e 2 2 2 2 2 e f f c c . . . 
. . e e 2 2 e f f f f b c . . . 
. e e e f e 2 b f f f d c . . . 
e e 2 2 d f 2 1 1 1 1 b c . . . 
e e 2 2 d f e e c c c . . . . . 
b 1 1 d e 2 2 e e c . . . . . . 
. f f e 2 2 2 2 e . . . . . . . 
. . f f d d 2 2 f f d d . . . . 
. . f f d d e e f f d d . . . . 
. . . f f f f . . . . . . . . . 
. . e e e f f f . . . . . . . . 
. . e e e e f f f . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
football = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
