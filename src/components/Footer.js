import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// images
import footerimage from '../images/footerimage.svg'
import telegram from '../images/footertelegram.svg'
import whatsapp from '../images/footerwhatsapp.svg'





export default function Footer() {
    return (
        <Box sx={{background: "#FF4500", mt: 4}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                    <Box style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Avatar src={footerimage} />
                            <Typography sx={{color: "#fff"}}>Sapapay</Typography>
                        </Stack>
                        <Typography sx={{color: "#fff", fontWeight: "bold"}}>GET your Business seen by <br /> Investors, Partners and Sponsors.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} sx={{mb: {xs: 2, md: 0}, mt: {xs: 2, md: 0}}}>
                    <Box style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <Stack >
                            <Typography sx={{color: "#fff", fontSize: "16px"}}>About Us</Typography>
                            <Typography sx={{color: "#fff", fontSize: "16px"}}>Our Vision</Typography>
                            <Typography sx={{color: "#fff", fontSize: "16px"}}>Our Team</Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <Stack spacing={1}>
                            <Typography sx={{color: "#fff", fontWeight: "bold"}}>Contact Us</Typography>
                            <Stack direction="row" spacing={1}>
                                <Avatar src={telegram} />
                                <Avatar src={whatsapp} />
                            </Stack>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}