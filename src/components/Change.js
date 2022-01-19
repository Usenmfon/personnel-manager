import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

// import family from '../images/family.png'

export default function Change() {
    return (
        <Box sx={{}}>
             <Grid container rowSpacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6} sx={{mt: {xs: 4}}}>
                        <Box sx={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <Typography sx={{fontSize: {xs: "18px", sx: "20px", md: "24px"}, color: "#fff", textTransform: "capitalize", fontWeight: "bold", mt: 2, mb: {xs: 4}}}>GET your business seen by <br /> investors, partners and Sponsors</Typography>
                            <Typography sx={{fontSize: "20px", color: "#fff", mb: 4}}>--- Sapapay helps to list your business and gives Users a viral Online Visibility.</Typography>
                            
                            <Stack direction="row" spacing={2}>
                                <Button  style={{ color: "#fff", border: "1px solid #FF4500"}}>Login</Button>
                                <Link to="/signup" style={{ textDecoration: 'none' }}>
                                    <Button style={{background: "#FF4500", color: "#fff"}}>Sign Up</Button>
                                </Link>
                                
                            </Stack>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={6} md={6}>
                        <Box sx={{ display: "flex", justifyContent: "end"}}>
                        <Avatar alt="happy family" src={family} sx={{width: "461px", height: "400px", display: {xs: "none", md: "block"}}}></Avatar>
                        </Box>
                    </Grid> */}
                    
                </Grid>
                {/* <Outlet /> */}
        </Box>
    )
}