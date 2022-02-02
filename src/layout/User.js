import { Add } from "@mui/icons-material";
import { Box, Container, Fab, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom'
import AccountDrawer from "../components/layout/drawer";
import AccountToolbar from "../components/layout/toolbar";

export default function UserLayout(props) {

  const [drawer, setDrawer] = useState(false)
  const navigate = useNavigate()
  const toggleDrawer = ()=>{
    setDrawer(!drawer)
  }

  return (
    <Box>
      <AccountToolbar toggle={toggleDrawer} />
      <AccountDrawer open={drawer} close={toggleDrawer} />
      <Toolbar />
      <Container disableGutters maxWidth={false} sx={{  width: { md: `calc(100% - 240px)` },  ml: { md: `240px` }, }}>
        <Outlet />
      </Container>
      <Fab onClick={()=>navigate('/account/staff/add')} color="primary" sx={{position:'fixed', bottom:27,right:27}}>
        <Add/>
      </Fab>

    </Box>
  )
}