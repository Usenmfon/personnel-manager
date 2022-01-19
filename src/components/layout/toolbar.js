import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AccountToolbar(props) {

  const navigate = useNavigate()

  return (
    <AppBar sx={{ width: { md: `calc(100% - 240px)` }, ml: { md: `240px` }, }}>
      <Toolbar>
        <IconButton sx={{ display: { md: 'none' } }} onClick={props.toggle} >
          <Menu color="secondary" />
        </IconButton>
        <Typography variant="h4" sx={{ flexGrow: 1 }}> Personnel Management System </Typography>
        <Button onClick={()=>navigate('/')} variant="contained" color="secondary"> Logout </Button>
      </Toolbar>
    </AppBar>
  )
}