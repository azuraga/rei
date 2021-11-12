import type { NextPage } from 'next'
import MessageBoard from "../../components/MessageCard/MessageBoard";
import MessageCard from "../../components/MessageCard/MessageCard";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
import React from "react";
import {Grid} from "@mui/material";
import message_json from './rei_messages.json'
import message_friends_json from './rei_messages_friends.json'

const MessagesPage: NextPage = () => {
    let messages = message_json.content.map((message) => <MessageCard rawMessage={message}/>)
    messages = messages.concat(message_friends_json.content.map((message) => <MessageCard rawMessage={message}/>))
    return (<>
            {/*<Background className={styles.background}/>*/}
            <Grid container
                  spacing={5}
                  alignItems="center"
                  justifyContent="center"
                  marginTop="2vh"
                  direction="column"
                  columns={1}
            >
                <Grid item>
                    <img src="MessagePageHeader.svg" alt={"皆のメッセージ"}/>
                </Grid>
                <Grid item>
                    <MessageBoard messages={messages}/>
                </Grid>
                <Grid item>
                    <NextButton href={"/"}/>
                </Grid>
            </Grid>
            <Footer/>

        </>

    )
}

export default MessagesPage
