import { Drawer, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";



const links = [
  { path: '/account/', title: 'Home' },
  { path: '/account/staff', title: 'Staff' },
]

const drawerWidth = 240

export default function AccountDrawer(props) {
  
  const navigate = useNavigate()
  
  const children = (
    <List>
      {
        links.map((item) => (
          <ListItemButton onClick={()=>navigate(item.path)} key={item.title}>
            <ListItemText primaryTypographyProps={{fontSize:'1.5em'}} primary={item.title} />
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