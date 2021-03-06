import React, {useState} from "react";
import {getRandomCardColour} from "./colours";
import {animated, useSpring} from "react-spring";
import {Alert, Snackbar} from "@mui/material";
import {MessageCardBase} from "./MessageCard";
import {JSONMessage} from "./message";

enum PositionContext {
    left = -10,
    mid = 0,
    right = 10
}

export interface SingleLanguageMessageProps {
    message: string,
    meta: JSONMessage
}

 /*
* In case only one language is available, this card will reject when the user tempts to click it.
* */
export default function SingleLanguageMessageCard({message, meta}: SingleLanguageMessageProps) {
    const [color, setColor] = useState(getRandomCardColour());
    // todo: make use of spring physics so state doesn't need to be used.

    // the relative x value of a card based on its contextual location
    const [positionState, setPositionState] = useState(PositionContext.mid)
    const [showSnackBar, setShowSnackBar] = useState(false);

    const styles = useSpring({
        x: positionState,
        config: {
            duration: 100,
        },
        onRest: () => {
            if (positionState == PositionContext.left)
                setPositionState(PositionContext.right)
            else if (positionState == PositionContext.right)
                setPositionState(PositionContext.mid)

        },
    });

    const handleClick = () => {
        setPositionState(PositionContext.left)
        setShowSnackBar(true)
    }

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowSnackBar(false);
    };
    return <>
        <Snackbar
            open={showSnackBar}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity="info">
                This message does not have a translation.
                <br/>
                翻訳はありません。
            </Alert>
        </Snackbar>
        <animated.div style={styles}
                      onClick={handleClick}
        >
            <MessageCardBase author={meta.author} message={message} color={color} vtuber={meta.vtuber}/>
        </animated.div>
    </>
}