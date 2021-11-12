import styles from "./MessageCard.module.scss"
import {Card, CardContent, Typography} from "@mui/material";
import React from "react";
import SingleLanguageMessageCard from "./SingleLanguageMessageCard";
import MultiLanguageMessageCard from "./MultiLanguageMessageCard";
import VerifiedIcon from '@mui/icons-material/Verified';
import {JSONMessage} from "./message";

export interface MessageBaseProps {
    author: string,
    message: string,
    color: string
    vtuber: boolean
}

export interface MessageCardProps {
    rawMessage: JSONMessage
}

export default function MessageCard({rawMessage}: MessageCardProps) {
    // according to form, at least one language is provided
    const {author, message, vtuber} = rawMessage;
    if (message.JA == "")
        return <SingleLanguageMessageCard message={message.EN} meta={{author, message, vtuber}}/>
    else if (message.EN == "")
        return <SingleLanguageMessageCard message={message.JA} meta={{author, message, vtuber}}/>

    return <MultiLanguageMessageCard rawMessage={rawMessage}/>
}

export function MessageCardBase({author, message, color, vtuber}: MessageBaseProps) {
    const cardRef = React.useRef(null);
    return <Card className={styles.card}
                 ref={cardRef}
                 sx={{background: color}}>
        <CardContent>
            <Typography className={styles.content}>
                {message}
            </Typography>
            <Typography className={styles.author}>
                {vtuber && <VerifiedIcon/>} {author}
            </Typography>
        </CardContent>
    </Card>
}
