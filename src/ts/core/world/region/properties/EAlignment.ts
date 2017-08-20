/**
 * Created by akersten on 8/19/17.
 */

import {Dice} from "../../../probability/Dice";

export enum EAlignment {
    NEUTRAL,
    EVIL,
    GOOD
}

export class Alignment {

    /**
     * Pick an alignment at random.
     * @returns {EAlignment}
     */
    static getRandomAlignment() : EAlignment {
        return Dice.roll(3);
    }

    /**
     * Pick an alignment based on the relative rarity of each alignment.
     */
    static getRandomAlignmentWeighted() : EAlignment {
        let weights = [100, 10, 40];

        return Dice.rollWeighted(weights);
    }
}