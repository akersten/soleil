/**
 * Created by akersten on 8/19/17.
 */

import {EAlignment} from "./properties/EAlignment";
import {EBiome} from "./properties/EBiome";
import {EBiomeIntensity} from "./properties/EBiomeIntensity";
import {EDanger} from "./properties/EDanger";
import {ELuck} from "./properties/ELuck";
import {EPopulationDensity} from "./properties/EPopulationDensity";
import {ESpirit} from "./properties/ESpirit";
import {ETemperature} from "./properties/ETemperature";
/**
 * A region of the world.
 */
export class Region {

    constructor() {

    }

    alignment : EAlignment;
    biome : EBiome;
    biomeIntensity : EBiomeIntensity;
    danger : EDanger;
    luck : ELuck;
    populationDensity : EPopulationDensity;
    spirit: ESpirit;
    temperature: ETemperature;

}