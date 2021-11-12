import type { NextPage } from 'next'
import MessageBoard from "../../components/MessageCard/MessageBoard";
import MessageCard, {MultiLanguageMessageCard} from "../../components/MessageCard/MessageCard";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
import styles from "../../styles/Home.module.scss";
import {Background, Parallax} from "react-parallax";
import React from "react";
import {Grid} from "@mui/material";
import message_json from './rei_messages.json'

const MessagesPage: NextPage = () => {
    const messages = message_json.content.map((message) => <MultiLanguageMessageCard author={message.author} message={message.message}/>)

    return (
        <Parallax strength={400}>
            <Background className={styles.background}/>
            <Grid container
                  spacing={5}
                  alignItems="center"
                  justifyContent="center"
                  marginTop="2vh"
            >
                <Grid item>
                    <img src="MessagePageHeader.svg" alt={"皆のメッセージ"}/>
                </Grid>
                <Grid item>
                    <MessageBoard messages={messages}/>
                </Grid>
                <Grid item xs={12}/>
                <Grid item>
                    <NextButton href={"/"}/>
                </Grid>
            </Grid>
            <Footer/>
        </Parallax>
    )
}

export default MessagesPage
