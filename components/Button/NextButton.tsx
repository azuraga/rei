import styles from "./Button.module.scss"
import {Fab, Slide} from "@mui/material";
import {useState} from "react";
import {useRouter} from "next/router";

interface NextButtonProps {
    href: string
}

export default function NextButton({href}: NextButtonProps) {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();

    const goIfClicked = () => {
        if (clicked)
            router.push(href);
    }

    return <Slide direction="up"
                  in={!clicked}
                  timeout={1000}
                  onExited={goIfClicked}
        >
            <Fab className={styles.button}
                 onClick={() => setClicked(true)}>
                <img className={styles.image} alt="next"/>
            </Fab>
        </Slide>
}