import type { NextPage } from 'next'
import {Button, Card, CardActions, CardContent, Container, Fade, Grid, Tooltip, Typography} from "@mui/material";
import styles from "../../styles/HappyBirthday.module.scss";
import React from 'react';
import {DownButtonWithLabel} from "../../components/Button/PreparedButtons";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Masonry from "@mui/lab/Masonry";
import {Box} from "@mui/system";

const cardStyle = {
    maxWidth: 275,
    borderRadius: '10px',
    backgroundColor: '#FCD9D7'
}

const creditList = [
    <Card sx={cardStyle} key={0}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Product Owner
                </Typography>
                <Typography  color="text.primary">
                    Sheep
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="@Idle_Sheep">
                    <Button href="https://twitter.com/Idle_Sheep" startIcon={<TwitterIcon/>}/>
                </Tooltip>
            </CardActions>
        </Card>,
    <Card sx={cardStyle} key={1}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Lead Developer
                </Typography>
                <Typography color="text.primary">
                    Azuraga
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="@azuragasetsu">
                    <Button href="https://twitter.com/azuragasetsu" startIcon={<TwitterIcon/>}/>
                </Tooltip>
                <Tooltip title="Azuraga Melody">
                    <Button href="https://www.youtube.com/channel/UC4msLaLAIDy1XTAr-Whw4-g" startIcon={<YouTubeIcon/>}/>
                </Tooltip>
            </CardActions>
        </Card>,
    <Card sx={cardStyle} key={2}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Developer
                </Typography>
                <Typography color="text.primary">
                    RedMap
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>,
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
    <Card sx={cardStyle} key={4}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Commissioned Artist
                </Typography>
                <Typography color="text.primary">
                    Ninami15
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="@coppersketches">
                    <Button href="https://www.twitter.com/coppersketches" startIcon={<TwitterIcon/>}/>
                </Tooltip>
            </CardActions>
        </Card>
];


const credits: NextPage = () => {
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

            <Typography variant="h5">Credits</Typography>

            <Container maxWidth="md">
                <Masonry columns={3} spacing={3}>
                    {creditList.map((element, index) => <div key={index}>{element}</div>)}
                </Masonry>
            </Container>


            <DownButtonWithLabel href={"/messages"}>back to messages</DownButtonWithLabel>
        </Box>
    )

}

export default credits
