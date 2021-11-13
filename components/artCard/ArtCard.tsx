import styles from "./ArtCard.module.scss"
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";
import art from "../../pages/fanart/art.json";
import {JSONArt} from "./art";
import SingleLanguageMessageCard from "./SingleLanguageMessageCard";
export interface ArtBaseProps {
    artist: string,
    image: string
    color: string

}

export interface ArtCardProps {
    rawMessage: JSONArt
}

export default function ArtBoard({rawMessage}: ArtCardProps) {
    const {artist, image} = rawMessage;
    return <SingleLanguageMessageCard artist={artist}  meta={{artist,image}}/>
}

export function ArtCardBase({artist,image,color}: ArtBaseProps) {
    const cardRef = React.useRef(null);
    return <Card className={styles.card}
                 ref={cardRef}
                 sx={{background: color}}>            
        <CardContent>
            <Typography className={styles.author}>
                {artist}
            </Typography>
        </CardContent>
    </Card>
}
