import styles from "./Button.module.scss";
import NextButton from "./NextButton";
import {easing, Slide} from "@mui/material";
import Label from "../Label/Label";
import React, {PropsWithChildren} from "react";


type ButtonWithLabelProps = PropsWithChildren<{
    href: string
}>

export const NextButtonWithLabel = ({href, children}: ButtonWithLabelProps) => {
    return <div className={styles.nextButtonArea}>
        <div className={styles.nextButton}>
            <NextButton href={href}/>
        </div>

        <Slide direction="left"
               in={true}
               timeout={1000}
               easing={{ enter: easing.easeInOut, exit: easing.easeInOut}}
        >
            <div className={styles.nextLabel}>
                <Label>{children}</Label>
            </div>
        </Slide>
    </div>
}

export const PreviousButtonWithLabel = ({href, children}: ButtonWithLabelProps) => {
    return <div className={styles.previousButtonArea}>
        <div className={styles.previousButton}>
            <NextButton href={href}/>
        </div>

        <Slide direction="right"
               in={true}
               timeout={1000}
               easing={{ enter: easing.easeInOut, exit: easing.easeInOut}}
        >
            <div className={styles.previousLabel}>
                <Label>{children}</Label>
            </div>
        </Slide>
    </div>
}
