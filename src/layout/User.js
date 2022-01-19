import { Box, Container, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet } from 'react-router-dom'
import AccountDrawer from "../components/layout/drawer";
import AccountToolbar from "../components/layout/toolbar";

export default function UserLayout(props) {

  const [drawer, setDrawer] = useState(false)

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
    </Box>
  )
}