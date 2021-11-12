import type { NextPage } from 'next'
import MessageCard from "../../components/MessageCard/MessageCard";
import React from "react";
import message_json from './rei_messages.json'
import message_friends_json from './rei_messages_friends.json'
import {JSONMessage} from "../../components/MessageCard/message";
import MessageBoard from "../../components/MessageCard/MessageBoard";
import {Grid, Slide} from "@mui/material";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
const jsonToJsx = (message: JSONMessage) => <MessageCard rawMessage={message}/>;

const MessagesPage: NextPage = () => {
    const friends = message_friends_json.content.map(jsonToJsx);
    const fans = message_json.content.map(jsonToJsx);
    const messages = friends.concat(fans);

    return (
        <>
            <Grid container
                  spacing={5}
                  alignItems="center"
                  justifyContent="center"
                  marginTop="2vh"
                  direction="column"
                  columns={1}
                >
                    <Grid item>
                        <Slide direction="down" in={true}>
                            <img src="MessagePageHeader.svg" alt={"皆のメッセージ"}/>
                        </Slide>
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
