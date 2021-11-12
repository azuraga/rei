import type { NextPage } from 'next'
import MessageBoard from "../../components/MessageCard/MessageBoard";
import MessageCard from "../../components/MessageCard/MessageCard";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
import React from "react";
import {Grid} from "@mui/material";
import message_json from './rei_messages.json'
import message_friends_json from './rei_messages_friends.json'
import {JSONMessage} from "../../components/MessageCard/message";

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a: Array<any>) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const jsonToJsx = (message: JSONMessage) => <MessageCard rawMessage={message}/>;

const MessagesPage: NextPage = () => {
    const friends = message_friends_json.content.map(jsonToJsx);
    const fans = message_json.content.map(jsonToJsx);

    const messages = friends.concat(fans);

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
