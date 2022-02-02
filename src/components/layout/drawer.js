import { Close, Groups, Home, PersonRemove } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";



const links = [
  { path: '/account/', title: 'Home', icon: Home },
  { path: '/account/staff', title: 'Staff', icon: Groups },
  { path: '/account/staff/retired', title: 'Retired', icon: PersonRemove }
]

const drawerWidth = 240

export default function AccountDrawer(props) {

  const navigate = useNavigate()

  const children = (
    <List>
      <ListItem sx={{ my: 1, display: { xs: 'block', md: 'none' } }} secondaryAction={
        <IconButton color="primary">
          <Close />
        </IconButton>
      } />
      {
        links.map((item) => (
          <ListItemButton onClick={() => navigate(item.path)} key={item.title}>
            <ListItemIcon >
              <item.icon color="primary" sx={{width:25, height:25}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ fontSize: '1.2em' }} primary={item.title} />
          </ListItemButton>
        ))
      }
    </List>
  )
  return (
    <>
      <Drawer variant="temporary" open={props.open} onClose={props.close}
        ModalProps={{ keepMounted: true, }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        children={children} />

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}>
        <Toolbar />
        {children}

      </Drawer>

    </>
  )
}