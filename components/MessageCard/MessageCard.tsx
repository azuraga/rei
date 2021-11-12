import styles from "./MessageCard.module.scss"
import {Card, CardContent, Typography} from "@mui/material";
import {getRandomCardColour} from "./colours";
import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import SingleLanguageMessageCard from "./SingleLanguageMessageCard";


export interface MessageProps {
    author: string,
    message: string,
    color: string
}

export interface MultiLanguageMessageProps {
    author: string,
    message: JSONMessageEntry // an object containing the message per language [EN, JA]
}

export interface JSONMessageEntry {
    EN: string,
    JA: string
}


/*
* Flip card to switch languages
* */
export default function MessageCard({author, message}: MultiLanguageMessageProps) {
    // according to form, at least one language is provided
    if (message.JA == "")
        return <SingleLanguageMessageCard author={author} message={message.EN} />
    else if (message.EN == "")
        return <SingleLanguageMessageCard author={author} message={message.JA} />

    return <MultiLanguageMessageCard author={author} message={message} />

}

export function MultiLanguageMessageCard({author, message}: MultiLanguageMessageProps) {
    const [showEN, setShowEN] = useState(true);
    const [colour, setColour] = useState(getRandomCardColour());

    return (
        <div onClick={() => setShowEN(!showEN)}>
            <ReactCardFlip
                isFlipped={showEN}
                flipDirection="horizontal"
                flipSpeedBackToFront={0.6}
                flipSpeedFrontToBack={0.6}
            >
                <MessageCardBase author={author} message={message.JA} color={colour}/>
                <MessageCardBase author={author} message={message.EN} color={colour}/>
            </ReactCardFlip>
        </div>
    );
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
