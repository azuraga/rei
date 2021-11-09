import type { NextPage } from 'next'
import Head from 'next/head'
import MessageBoard from "../../components/MessageCard/MessageBoard";
import MessageCard from "../../components/MessageCard/MessageCard";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
import styles from "../../styles/Home.module.scss";

const MessagesPage: NextPage = () => {
    const messages = [<MessageCard author="The mouse of the evening watches" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>]

    return (
        <div className={styles.container}>
            <Head>
                <title>Tadano Rei Birthday Project</title>
                <meta name="description" content="Happy birthday!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <img src="MessagePageHeader.svg" alt={"皆のメッセージ"}/>
            </div>

            <main className={styles.main}>
                <MessageBoard messages={messages}/>
                <NextButton href={"/"}/>
            </main>
            <Footer/>
        </div>

    )
}

export default MessagesPage
