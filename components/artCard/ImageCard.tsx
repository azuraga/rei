import React, {useState} from "react";
import {getRandomCardColour} from "./colours";
import {ImageCardBase} from "./ImageCardBase";

export interface ImageCardProps {
    artist: string,
    image: string
}

export default function ImageCard({artist,image}: ImageCardProps) {
    const [color, setColor] = useState(getRandomCardColour());
    // todo: make use of spring physics so state doesn't need to be used.
    // the relative x value of a card based on its contextual location
    return <ImageCardBase artist={artist} image={image} color={color}/>
}