/**
 * Created by akersten on 8/19/17.
 */

export class Dice {

    /**
     * Rolls a fair dice in the range [0,max).
     *
     * @param max  A value up to this will be chosen.
     * @returns    An unweighted dice roll in [0,max).
     */
    static getRoll(max : number) {
        return Math.floor(Math.random() * max);
    }

    /**
     *
     * @param weights An array of relative weights. The larger the value at an index, the more likely that index will be
     *                returned.
     * @returns       A random number up to `weights.length` (exclusive) based on the values of `weights`.
     */
    static rollWeighted(weights : number[]) : number {
        let weightSum = 0;
        weights.forEach(n => {
            if (n < 0) {
                // TODO: Throw exception. Not healthy for our algorithm :(
            }
            weightSum += n;
        });

        let roll = Math.floor(Math.random() * weightSum);

        let count = 0;
        let run;

        weights.forEach(n => {
            run += n;
            if (roll < run) {
                return count;
            }
            count++;
        });

        // TODO: Throw exception, should never get here
        return -1;
    }
}