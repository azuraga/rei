import React, {useState} from "react";
import {getRandomCardColour} from "./colours";
import ReactCardFlip from "react-card-flip";
import {MessageCardBase, MessageCardProps} from "./MessageCard";


export default function MultiLanguageMessageCard({rawMessage}: MessageCardProps) {
    const [showEN, setShowEN] = useState(false);
    const [colour, setColour] = useState(getRandomCardColour());
    const {author, message, vtuber} = rawMessage;
    return (
        <div onClick={() => setShowEN(!showEN)}>
            <ReactCardFlip
                isFlipped={showEN}
                flipDirection="horizontal"
                flipSpeedBackToFront={0.6}
                flipSpeedFrontToBack={0.6}
            >
                <MessageCardBase author={author} message={message.JA} color={colour} vtuber={vtuber}/>
                <MessageCardBase author={author} message={message.EN} color={colour} vtuber={vtuber}/>
            </ReactCardFlip>
        </div>
    );
}