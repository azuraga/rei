import {Box} from "@mui/system";
import styles from "../Button/Button.module.scss";
import {PropsWithChildren} from "react";

type LabelProps = PropsWithChildren<{}>;

export default function Label({children}: LabelProps) {
    return <Box className={styles.buttonTextBox}>{children}</Box>
}