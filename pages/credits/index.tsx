import type { NextPage } from 'next'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Fade,
    Tooltip,
    Typography
} from "@mui/material";
import styles from "../../styles/Credits.module.scss";
import React, {PropsWithChildren} from 'react';
import {DownButtonWithLabel} from "../../components/Button/PreparedButtons";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Masonry from "@mui/lab/Masonry";
import {Box} from "@mui/system";
import useWindowDimensions from "../../util/WindowDimensions";

const cardStyle = {
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: '#FCD9D7'
}
const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
}

type CreditCardProps = PropsWithChildren<{
    title: string
    name: string
    avatar: string
}>

function CreditCard({title, name, avatar, children}: CreditCardProps) {
    return  <Card sx={cardStyle} key={0}>
        <Box sx={boxStyle}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography  color="text.primary">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                {children}
            </CardActions>
        </Box>
        <CardMedia
            component="img"
            image={avatar}
            alt={name}
            className={styles.staffImage}
        />
    </Card>
}

const creditList = [
    <CreditCard avatar="staff/sheep.jpg" name="Sheep" title="Product Owner">
        <Tooltip title="@Idle_Sheep">
            <Button href="https://twitter.com/Idle_Sheep" startIcon={<TwitterIcon/>}/>
        </Tooltip>
    </CreditCard>,
    <CreditCard avatar="staff/azuraga.png" name="Azuraga" title="Head Developer">
        <Tooltip title="@azuragasetsu">
            <Button href="https://twitter.com/azuragasetsu" startIcon={<TwitterIcon/>}/>
        </Tooltip>
        <Tooltip title="Azuraga Melody">
            <Button href="https://www.youtube.com/channel/UC4msLaLAIDy1XTAr-Whw4-g" startIcon={<YouTubeIcon/>}/>
        </Tooltip>
    </CreditCard>,
    <CreditCard avatar="staff/redmap.png" name="RedMap" title="Developer"/>,
    <Card sx={cardStyle} key={3}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Developer
                </Typography>
                <Typography color="text.primary">
                    short643
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>,
    <CreditCard avatar="staff/coppersketches.jpg" name="Ninami15" title="Commissioned Artist">
        <Tooltip title="@coppersketches">
            <Button href="https://twitter.com/coppersketches" startIcon={<TwitterIcon/>}/>
        </Tooltip>
    </CreditCard>,
];


const credits: NextPage = () => {

    let columnCount;
    if (typeof window !== 'undefined') {
        const { height, width } = useWindowDimensions();
        columnCount = width < 860 ? 1 : 3;
    } else {
        columnCount = 1;
    }

    return (
        <Box
             sx={{
                 gap: 5,
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems:"center",
                 flexDirection: 'column',
             }}
        >
            <Fade in={true} timeout={3000}>
                <div>
                    <img className={styles.logo} src="/logo.png" alt="Tadano Rei Birthday Project"/>
                </div>
            </Fade>

            <h1 className={styles.header}>Credits</h1>

            <Container maxWidth="md">
                <Masonry columns={columnCount} spacing={3}>
                    {creditList.map((element, index) => <div key={index}>{element}</div>)}
                </Masonry>
            </Container>


            <DownButtonWithLabel href={"/messages"}>back to messages</DownButtonWithLabel>
        </Box>
    )

}

export default credits
