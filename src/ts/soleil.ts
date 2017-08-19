/**
 * Created by akersten on 8/19/17.
 */

/// <reference path="../../node_modules/phaser-ce/typescript/phaser.d.ts" />

class Soleil {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'img/placeholder_256.png');
    }

    create() {
        let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
}

window.onload = () => {

    let game = new Soleil();

};