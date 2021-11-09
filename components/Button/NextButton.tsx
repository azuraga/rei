import styles from "./Button.module.scss"
import {Button, Fab, Slide} from "@mui/material";
import {useState} from "react";

export default function NextButton() {
    const [checked, setChecked] = useState(true);

    return <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Fab className={styles.button}
             onClick={(e) => setChecked(false)}>
            <img className={styles.image} alt="next"/>
        </Fab>
    </Slide>

}