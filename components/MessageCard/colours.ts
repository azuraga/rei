
// set of colours a message card can be
import {getRndInteger} from "../../util/util";

const colours =[
        "#B0006A",
        "#FF62BF",
        "#FF099D",
        "#DC0084",
        "#FB7099"
];


export function getRandomCardColour() {
        return colours[getRndInteger(0, colours.length)]
}