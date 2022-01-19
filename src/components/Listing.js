import { Link } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
// import Typo from '../components/layout/Typo'


export default function Listing () {
    return (
        <Container sx={{minHeight: "100vh"}}>
            <Link to="/">
                <CloseIcon sx={{ mt: 3, color: "#FF4500", position: "relative", left: {md: "800px", sm: "400px" , xs: "300px"}}} />
            </Link>
            <Box sx={{textAlign: "center"}}>
                <h1 variant="h5" style={{ color: "rgb(148, 143, 143)"}}>LISTINGS</h1>
                <Typography sx={{ color: "rgb(148, 143, 143)", fontWeight: "bold"}}>Here, your business is listed to potential investors</Typography>
            </Box>
            <Box sx={{ display: "flex", p: 2, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h3  style={{mb: 4, color: "rgb(148, 143, 143)", fontWeight: "bold"}}>Choose From Category</h3>
                <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ p: 2}}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/listing/farming" style={{textDecoration: "none"}}>
                        <Typography sx={{background: "#74270B", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px"}}>Farming</Typography>
                        </Link>
                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{background: "#74270B", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px"}}>Hotel service</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{background: "#74270B", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px"}}>Fishery</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{background: "#74270B", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px"}}>Oil Exportation</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{background: "#74270B", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px"}}>Garri Processing</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{background: "#74270B", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px"}}>Palm Wine Tapping</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{background: "#74270B", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px"}}>Soap Making</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{background: "#74270B", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px"}}>Drop shipping</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{background: "#74270B", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px"}}>Real Estate</Typography>
                    </Grid>
                </Grid>
            </Box>
            
        </Container>
    )
}