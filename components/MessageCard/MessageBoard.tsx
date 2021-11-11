import React from "react";
import Masonry from '@mui/lab/Masonry';
import {Grow} from "@mui/material";
import styles from "./MessageCard.module.scss"

export interface MessageBoardProps {
    messages: React.ReactElement[]
}

export default function MessageBoard({messages}: MessageBoardProps) {
    return <Masonry columns={3} spacing={3} className={styles.board}>
        {messages.map((message, index) =>{
            return <Grow
                key={index}
                in={true}
                style={{
                    transformOrigin: '0 0 0'
                }}
                timeout={(/*index*/ + 1) * 900} // todo: find better way to sequential transition the messages
            >
                <div>{message}</div>
            </Grow>
        })}
    </Masonry>
}