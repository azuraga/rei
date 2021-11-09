
// set of colours a message card can be
const colours =[
        "#B0006A",
        "#FF62BF",
        "#FF099D",
        "#DC0084",
        "#FB7099"
];

function getRndInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) ) + min;
}
export function getRandomCardColour() {
        return colours[getRndInteger(0, colours.length)]
}