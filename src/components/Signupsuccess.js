import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import success from '../images/success.png'
import copy from '../images/copy.png'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useAuth } from '../context/auth'


export default function Signupsuccess () {

    const [copySuccess, setCopySuccess] = useState(false);
    

    const {currentUser} = useAuth() // login or signup first 
    // console.log(currentUser.email)
    console.log("Current user ---> ", currentUser )
    const [link, setLink] = useState(currentUser.username)
    
    // console.log("Sessions user ---> ", sessionStorage.getitem('user') ) // this one might have errors 

    console.log("this is " + link)
    let handleLink = (event) => {
        setLink(event.target.value)
    }
    

// your function to copy here

  // const copyToClipBoard = async copyMe => {
  //   try {
  //     await navigator.clipboard.writeText(copyMe);
  //     setCopySuccess('Copied!');
  //   } catch (err) {
  //     setCopySuccess('Failed to copy!');
  //   }
  // };

  let update = <div style={{display: "flex", marginTop: "15px", marginBottom: "15px", cursor: "pointer"}}>
       <Avatar src={copy} />
       <p style={{fontWeight: "bold"}}>Click to copy</p>
  </div>
    
    return (
        <Container sx={{mt: 8}}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Avatar src={success} />  
                <Typography sx={{fontSize: {xs: "1.5rem", md: "2rem"}, color: "#1C47E0", mt: 2, mb: 2}}>Congratulations On Signing Up</Typography> 
                <Typography sx={{fontWeight: "500", fontSize: "1.2rem"}}>Your business page link is still being reviewed</Typography>
                <Box sx={{display: "flex", justifyContent: "center", mt: 4, alignItems: "center", width: {xs: "100%", sm: "50%", md: "40%"}}}>
                <Grid container >
                    <Grid item xs={12} md={12}>
                    <Box sx={{ justifyContent: "center", alignItems: "center"}}>
                    <Typography  sx={{color: "#9ca3af"}}>Refer your friends</Typography>
                    <TextField 
                         
                         fullWidth
                        style={{borderRadius: "5px"}} 
                        value={link} 
                        onChange={handleLink} />
                    {/* <Avatar src={copy} sx={{position: "relative", left: {md: "90%", xs: "85%"}, mt: {md: -6, xs: -6}}} /> */}
                    
                </Box>
                    </Grid>
                    <Grid item xs={12} md={12} >
                    <Box sx={{display: "flex", width: "100%", justifyContent: {xs: "center", sm: "center", md: "center"}, alignItems: "center"}}>
                        <CopyToClipboard text={link}
                            onCopy={() => setCopySuccess(true)}>
                           {update}
                            
                        </CopyToClipboard>
                    </Box>
                    </Grid>
                </Grid>
                </Box>

                <Stack direction="row" spacing={2} >
                    <Avatar src={telegram} alt="telegram" />
                    <a
                    className="what-move"
                    href="whatsapp://send?text=Hello World!&phone=+2347042040580"
                    >
                    <Avatar src={whatsapp} alt="whatsapp"/>
                    </a>
                    
                  
                </Stack>
                

                <Button variant="contained" sx={{mt: 2}}>View Listing</Button>
                
                

                
        {copySuccess ? <span style={{color: 'red', marginTop: "50px"}}>Copied</span> : null}
            </Box> 
        </Container>
    )
}
