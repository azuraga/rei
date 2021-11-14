import type { NextPage } from 'next'
import MessageCard from "../../components/MessageCard/MessageCard";
import React from "react";
import message_json from './rei_messages.json';
import message_vtuber_json from './rei_messages_vtuber.json'
import {JSONMessage} from "../../components/MessageCard/message";
import MessageBoard from "../../components/MessageCard/MessageBoard";
import {Box, Chip, Grid, Slide} from "@mui/material";
import Footer from "../../components/MainElements/Footer";
import styles from "/styles/Messages.module.scss"
import {NextButtonWithLabel} from "../../components/Button/PreparedButtons";
import Navigation from "../../components/MainElements/Navigation";
import TranslateIcon from "@mui/icons-material/Translate";

const jsonToJsx = (message: JSONMessage) => <MessageCard rawMessage={message}/>;

const MessagesPage: NextPage = () => {
    const friends = message_vtuber_json.content.map(jsonToJsx);
    const fans = message_json.content.map(jsonToJsx);
    const messages = friends.concat(fans);

    return (
        <>
            <NextButtonWithLabel href={"fanart"}>fanart</NextButtonWithLabel>
            <Grid container
                  spacing={5}
                  alignItems="center"
                  justifyContent="center"
                  marginTop="2vh"
                  direction="column"
                >
                <Grid item>
                    <Slide direction="down" in={true}>
                        <img src="MessagePageHeader.svg" alt={"皆のメッセージ"} className={styles.header}/>
                    </Slide>
                </Grid>
                <Grid item>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Chip icon={<TranslateIcon />}  label="（存在あれば）翻訳を見るようにメッセージを押してください" className={styles.chipText}/>
                        <Chip label="Click on the message to view its translation (if available)" className={styles.chipText}/>
                    </Box>
                </Grid>
                    <Grid item>
                        <MessageBoard messages={messages}/>
                    </Grid>
                </Grid>

            <Navigation/>
            <Footer/>
        </>
    )
}

export default MessagesPage
