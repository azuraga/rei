import React, {useState} from "react";
import {getRandomCardColour} from "./colours";
import ReactCardFlip from "react-card-flip";
import {JSONMessageEntry, MessageCardBase} from "./MessageCard";

export interface MultiLanguageMessageProps {
    author: string,
    message: JSONMessageEntry // an object containing the message per language [EN, JA]
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