import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, styled, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ABar = styled(AppBar)(({theme})=>({
  zIndex:theme.zIndex.drawer + 1,
  [theme.breakpoints.down('md')]:{
    zIndex:theme.zIndex.drawer - 1,
  }
}))

export default function AccountToolbar(props) {

  const navigate = useNavigate()

  return (
    <ABar >
    {/* <AppBar sx={{ width: { md: `calc(100% - 240px)` }, ml: { md: `240px` }, }}> */}
      <Toolbar>
        <IconButton sx={{ display: { md: 'none' } }} onClick={props.toggle} >
          <Menu color="secondary" />
        </IconButton>
        <Typography variant="h4" sx={{ flex: {flexGrow: 1}, fontSize : {sm: `2rem`, xs : `.8rem`} }}> Personnel Management System </Typography>
        <Button onClick={()=>navigate('/')} variant="contained" color="secondary"> Logout </Button>
      </Toolbar>
    </ABar>
  )
}