import { Link, Outlet } from "react-router-dom"
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';


import '../App.css';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

import sapapay from '../images/sapapay.svg'
import family from '../images/Familyorange.png'
import piechart from '../images/piechart.png'
import peer from '../images/peer.png'
import carrot from '../images/carrot.png'
import cake from '../images/cake.png'
import plantain from '../images/plantain.png'
import payment from '../images/payment.svg'

import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function Homepage() {

    const theme = useTheme();
  const [open, setOpen ] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
       <div>
           <Box>
       {/* <Countdowntimer /> */}
      <Box style={{display: "flex", justifyContent: "space-around"}}>
          <Box>
            <Link to="/" style={{ textDecoration: 'none' }}>
                    <Stack direction="row" sx={{justifyContent: 'center', alignItems: "center", position: "relative", right: {xs : '30%', md: "-10%"}, mt: 4}} spacing={1}>
                        <Avatar alt="logo" src={sapapay} />
                        <Typography sx={{color: "#FF4500"}}>Sapapay</Typography>
                    </Stack>
                </Link>
          </Box>
          <MenuIcon 
            sx={{display: {md: "none", sm: "none"}, mt: 5, cursor: "pointer"}} 
            onClick={handleDrawerOpen}
          />
          <Box sx={{mt: 4, display: {xs: "none", md: "block"}}}>
            <Stack direction="row">
              <Link to="login" style={{textDecoration: "none"}}>
                <Button>Login</Button>
              </Link>
              <Link to="/signup" style={{textDecoration: "none"}}>
                <Button>Sign Up</Button>
              </Link>
              <Button>About US</Button>
              <Link to="/listing"style={{textDecoration: "none"}} >
                <Button>Listing Page</Button>
              </Link>
             
            </Stack>
          </Box>

          <Drawer
            sx={{
              width: drawerWidth,
              position: "absolute",
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Box>
              <Stack alignItems="center">
                
                <Link to="/login" style={{textDecoration: "none"}}>
                    <Button>Login</Button>
                </Link>
                <Link to="/signup" style={{textDecoration: "none"}}>
                    <Button>Sign Up</Button>
                </Link>
                <Link to="/aboutus" style={{textDecoration: "none"}}>
                    <Button>About US</Button>
                </Link>
                <Link to="/listing" style={{textDecoration: "none"}}>
                    <Button>Listing Page</Button>
                </Link>
                
              </Stack>
          </Box>
      </Drawer>
        </Box>
        
       <Outlet />
      
    </Box>
            <Container component="main">
            <Box sx={{ mt: 8}}>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: "300px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: "rgb(148, 143, 143)"}}>Change the way you earn</Typography>
                            <Typography sx={{p: 2, textAlign: "center",color: "rgb(148, 143, 143)"}}>Get your Business seen by <br /> Investors, partners and Sponsors.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{width: "300px", height: "300px"}}>
                            <Avatar src={family} alt="family" sx={{width: 'inherit', height: "inherit"}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 10, borderRadius: "10px", p: 4, boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);"}}>
              <Typography sx={{textAlign: "center", fontSize: "1.5rem", mb: 4, color: "rgb(148, 143, 143)"}}>Our Recommended Ads</Typography>
                  
              <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                  <Box sx={{ width: "100%"}}>
                    <Carousel>
                    <Carousel.Item interval={2000}>
                      <img
                        className="d-block w-100"
                        src={carrot}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>James Carrorts</h3>
                       
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        className="d-block w-100"
                        src={cake}
                        alt="Second slide"
                      />
                      <Carousel.Caption>
                        <h3>Lizzy's cake</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={plantain}
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Yemi's Plantain</h3>
                       
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Box>
              </Card>
            </Box>
            <Box sx={{ mt: 20}}>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: "300px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography sx={{fontWeight: "bold", fontSize: "1.2rem", color: "rgb(148, 143, 143)"}}>Empowerments</Typography>
                            <Typography sx={{ p: 2, textAlign: 'center', color: "rgb(148, 143, 143)"}}>
                              Empowerment has been the subject of widespread and careful theorizing, study and application in the field of social work, Community Psychology, health promotion and Organizational studies.
                              
                            </Typography>
                            <Typography sx={{textAlign: "center", color: "rgb(148, 143, 143)"}}>Our community(Sapapay) creates room for Investors and Partners far and Near to Support and Empower Startup Entrepreneurs and Business Brands with Funds(Capitals) needed to boost their Business.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{width: "300px", height: "300px"}}>
                            <Avatar src={piechart} alt="piechart" sx={{width: 'inherit', height: "inherit"}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 24}}>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: "300px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography sx={{fontWeight: "bold", fontSize: "1.2rem",color: "rgb(148, 143, 143)"}}>Market Place</Typography>
                            <Typography sx={{ p: 2, textAlign: "center",color: "rgb(148, 143, 143)"}}>Sapapay helps to list your business and gives Users a viral Online Visibility. 
For Experienced Users, the Building of a simple advertising model takes Less than an hour In the case of positioning of the website, the effects are not so fast. They are visible even after a few weeks.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{width: {xs: "300px", md: "400px"}, height: "300px"}}>
                            <Avatar src={peer} alt="peer to peer" sx={{width: 'inherit', height: "inherit"}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
            
            <Box sx={{ mt: 20, mb: 20}}>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: "300px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography sx={{fontWeight: "bold", fontSize: "1.2rem", color: "rgb(148, 143, 143)"}}>Peer To Peer Payment  </Typography>
                            <Typography sx={{ p: 2, textAlign: "center",color: "rgb(148, 143, 143)"}}>PEER TO PEER transactions are electronic money transfers made from one person to another through an intermediary, typically referred to as a peer to peer payment application.
                              Our Community offers all Users and Entrepreneurs a chance to Empower and Support each other with a token.

                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{display: {xs: "none",sm: "block", md: "block"}}}>
                            <img src={payment} alt="transaction"/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
           
        </Container>
        <Footer />
       </div>
        
    )
}