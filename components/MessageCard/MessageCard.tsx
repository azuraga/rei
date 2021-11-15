import React from "react";
import styles from "./MessageCard.module.scss"

import {Card, CardContent, Typography} from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import {JSONMessage} from "./message";
import SingleLanguageMessageCard from "./SingleLanguageMessageCard";
import MultiLanguageMessageCard from "./MultiLanguageMessageCard";

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
    return <Card
                 sx={{
                     background: color,
                     borderRadius: '31px',
                     maxWidth: '425px',
                 }}
    >
        <CardContent>
            <Typography sx={{
                fontFamily: 'Jua',
                lineHeight: '30px',
                textAlign: 'center',
                letterSpacing: '-0.017em',
                color: "#fff",
                margin: '1em'
            }}>
                {message}
            </Typography>
            <Typography sx={{
                maxWidth: 425 / 2,
                fontFamily: 'Jua',
                fontSize: '0.9em',
                lineHeight: '30px',
                color: '#fff',
                textAlign: 'right',
                margin: '1em 2.5em 0 auto'
            }}>
                {author}
                {vtuber && <VerifiedIcon fontSize="inherit"/>}
            </Typography>
        </CardContent>
    </Card>
}
