import styles from "./MessageCard.module.scss"
import {Card, CardContent, Typography} from "@mui/material";
import {getRandomCardColour} from "./colours";
import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import SingleLanguageMessageCard from "./SingleLanguageMessageCard";
import {MultiLanguageMessageCard, MultiLanguageMessageProps} from "./MultiLanguageMessageCard";


export interface MessageProps {
    author: string,
    message: string,
    color: string
}


export interface JSONMessageEntry {
    EN: string,
    JA: string
}


export default function MessageCard({author, message}: MultiLanguageMessageProps) {
    // according to form, at least one language is provided
    if (message.JA == "")
        return <SingleLanguageMessageCard author={author} message={message.EN} />
    else if (message.EN == "")
        return <SingleLanguageMessageCard author={author} message={message.JA} />

    return <MultiLanguageMessageCard author={author} message={message} />

}

export function MessageCardBase({author, message, color}: MessageProps) {
    const cardRef = React.useRef(null);
    return <Card className={styles.card}
                 ref={cardRef}
                 sx={{background: color}}>
        <CardContent>
            <Typography className={styles.content}>
                {message}
            </Typography>
            <Typography className={styles.author}>
                {author}
            </Typography>
        </CardContent>
    </Card>
}
