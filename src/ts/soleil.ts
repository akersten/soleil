import * as Phaser from "phaser-ce"
import IGameConfig = Phaser.IGameConfig;

/**
 * Created by akersten on 8/19/17.
 */


class Soleil {

    constructor() {

        let soleilConfig: IGameConfig = {
            width: 800,
            height: 600,
            renderer: Phaser.AUTO,
            parent: 'app',
            state: {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        };

        this.game = new Phaser.Game(soleilConfig);

    }

    game: Phaser.Game;

    preload(): void {
        this.game.load.image('logo', 'img/placeholder_256.png');
    }

    create(): void {
        let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.5, 0.5);

        this.game.add.tween(logo.scale).to({x: 2, y: 2}, 2000, Phaser.Easing.Bounce.Out, true);
    }

    update(): void {

    }


}

window.onload = () => {

    let game = new Soleil();

};