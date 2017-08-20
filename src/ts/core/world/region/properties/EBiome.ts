/**
 * Created by akersten on 8/19/17.
 */

import {Dice} from "../../../probability/Dice";

export enum EBiome {
    DESERT,
    FOREST,
    PLAINS,
    HILLS,
    ROCKS,
    SWAMP,
    WATER
}


export class Biome {

    /**
     * Pick a biome at random.
     * @returns {EAlignment}
     */
    static getRandomAlignment() : EBiome {
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                return EBiome.DESERT;
            case 1:
                return EBiome.FOREST;
            case 2:
                return EBiome.PLAINS;
            case 3:
                return EBiome.HILLS;
            case 4:
                return EBiome.ROCKS;
            case 5:
                return EBiome.SWAMP;
            case 6:
                return EBiome.WATER;
            default:
                return EBiome.PLAINS;
        }
    }

    /**
     * Pick a biome based on the relative rarity of each biome.
     */
    static getRandomAlignmentWeighted() : EBiome {
        let weights = [100, 10, 40];

        switch(Dice.getWeightedRoll(weights)) {
            case 0:

            case 1:

            case 2:

            default:

        }
    }
}