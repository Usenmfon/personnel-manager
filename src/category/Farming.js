import { useState  } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom"

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


import CloseIcon from '@mui/icons-material/Close';

import farm from '../images/farm.png'
import carrot from '../images/carrot.png'
import cake from '../images/cake.png'
import plantain from '../images/plantain.png'

export default function Farming () {
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <Container sx={{}}>
              <Link to="/listing">
                <CloseIcon sx={{ mt: 3, color: "#FF4500", position: "relative", left: {md: "1000px", sm: "400px" , xs: "300px"}}} />
            </Link>
           <Box sx={{ mt: 4}}>
                <h1 style={{textAlign: "center", color: "rgb(148, 143, 143)"}}>Farming Category</h1>
                
           </Box>
           <Box sx={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: {xs: "300px", sm: "500px", md: "750px"}, height: {md: "350px", xs: "150px"}}} style={{margin: "0 auto"}}>
               <img src={farm} alt="farm" style={{width: "100%", height: "inherit"}} />
           </Box>

           <Box sx={{ mt: 4, borderRadius: "10px", p: 4, boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);"}}>
           <h3 style={{textAlign: "center", mt: 4, mb: 4, color: "rgb(148, 143, 143)"}}>These are the all the list of approved farming businesses</h3>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                          <CardMedia
                          component="img"
                          image={carrot} 
                          height="193"
                          alt="carrot"
                          />
                         
                          <CardContent sx={{ background: "#272727", minHeight: "30px"}}>
                              <Stack sx={{width: "50%", margin: "0 auto"}}>
                                <Button onClick={handleClickOpen} sx={{position: "relative", top: "-155px", color: "#fff", border: "1px solid #fff"}}>Sponsor</Button>
                                <Button onClick={handleClickOpen}  sx={{position: "relative", top: "-115px", color: "#fff", border: "1px solid #fff"}}>View</Button>
                              </Stack>
                          
                            <Typography sx={{color: "#fff", textAlign: "center", fontWeight: "bold", mt: -6}}>John Carrots</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                          <CardMedia
                          component="img"
                          image={cake} 
                          height="193"
                          alt="cake"
                          />
                          <CardContent sx={{ background: "#272727", minHeight: "30px"}}>
                              <Stack sx={{width: "50%", margin: "0 auto"}}>
                                <Button onClick={handleClickOpen}  sx={{position: "relative", top: "-155px", color: "#fff", border: "1px solid #fff"}}>Sponsor</Button>
                                <Button onClick={handleClickOpen}  sx={{position: "relative", top: "-115px", color: "#fff", border: "1px solid #fff"}}>View</Button>
                              </Stack>
                          
                            <Typography sx={{color: "#fff", textAlign: "center", fontWeight: "bold", mt: -6}}>John Carrots</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                          <CardMedia
                          component="img"
                          image={cake} 
                          height="193"
                          alt="cake"
                          />
                         <CardContent sx={{ background: "#272727", minHeight: "30px"}}>
                              <Stack sx={{width: "50%", margin: "0 auto"}}>
                                <Button onClick={handleClickOpen}  sx={{position: "relative", top: "-155px", color: "#fff", border: "1px solid #fff"}}>Sponsor</Button>
                                <Button onClick={handleClickOpen}  sx={{position: "relative", top: "-115px", color: "#fff", border: "1px solid #fff"}}>View</Button>
                              </Stack>
                          
                            <Typography sx={{color: "#fff", textAlign: "center", fontWeight: "bold", mt: -6}}>John Carrots</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                          <CardMedia
                          component="img"
                          image={plantain} 
                          height="193"
                          alt="cake"
                          />
                         <CardContent sx={{ background: "#272727", minHeight: "30px"}}>
                              <Stack sx={{width: "50%", margin: "0 auto"}}>
                                <Button onClick={handleClickOpen}   sx={{position: "relative", top: "-155px", color: "#fff", border: "1px solid #fff"}}>Sponsor</Button>
                                <Button onClick={handleClickOpen}  sx={{position: "relative", top: "-115px", color: "#fff", border: "1px solid #fff"}}>View</Button>
                              </Stack>
                          
                            <Typography sx={{color: "#fff", textAlign: "center", fontWeight: "bold", mt: -6}}>John Carrots</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                          <CardMedia
                          component="img"
                          image={plantain} 
                          height="193"
                          alt="cake"
                          />
                          <CardContent sx={{ background: "#272727", minHeight: "30px"}}>
                              <Stack sx={{width: "50%", margin: "0 auto"}}>
                                <Button onClick={handleClickOpen}  sx={{position: "relative", top: "-155px", color: "#fff", border: "1px solid #fff"}}>Sponsor</Button>
                                <Button  onClick={handleClickOpen} sx={{position: "relative", top: "-115px", color: "#fff", border: "1px solid #fff"}}>View</Button>
                              </Stack>
                          
                            <Typography sx={{color: "#fff", textAlign: "center", fontWeight: "bold", mt: -6}}>John Carrots</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                          <CardMedia
                          component="img"
                          image={cake} 
                          height="193"
                          alt="cake"
                          />
                        <CardContent sx={{ background: "#272727", minHeight: "30px"}}>
                              <Stack sx={{width: "50%", margin: "0 auto"}}>
                                <Button onClick={handleClickOpen}  sx={{position: "relative", top: "-155px", color: "#fff", border: "1px solid #fff"}}>Sponsor</Button>
                                <Button onClick={handleClickOpen}  sx={{position: "relative", top: "-115px", color: "#fff", border: "1px solid #fff"}}>View</Button>
                              </Stack>
                          
                            <Typography sx={{color: "#fff", textAlign: "center", fontWeight: "bold", mt: -6}}>John Carrots</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <div>
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Feature coming....
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
          
        </DialogActions>
      </Dialog>
    </div>
        </Container>
    )
}