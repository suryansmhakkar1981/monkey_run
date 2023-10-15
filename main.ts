controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    150,
    false
    )
    simplified.gravity_jump(mySprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 0)
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`walk right`,
    100,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let location: tiles.Location = null
    tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`chest2`)
    tiles.setWallAt(tiles.locationOfSprite(location), true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`chest2`)
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk right`,
    150,
    true
    )
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`skyblock`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest1`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`background2`)
    tiles.setTilemap(tilemap`level2`)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    mySprite.say(":)", 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`bounce`)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`stand`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
