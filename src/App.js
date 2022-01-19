
// import './App.css';
// import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link, Outlet } from "react-router-dom"

// import Avatar from '@mui/material/Avatar';

// import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import IconButton from '@mui/material/IconButton';
// import DrawerHeader from '@mui/material/DrawerHeader';
// import List from '@mui/material/List';
// import ListItemText from '@mui/material/ListItemText';


// import sapapay from './images/sapapay.svg'


// import Footer from './components/Footer';

const drawerWidth = 240;

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));

function App() {
  const theme = useTheme();
  // const [open, setOpen ] = useState(false)

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };


  return (
    <Box>
       {/* <Countdowntimer /> */}
      <Box style={{display: "flex", justifyContent: "space-around"}}>
         
          

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
            
          >
          
              <IconButton >
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
           
            <Box>
              <Stack>
                
                <Link to="/login" sx={{textDecoration: "none"}}>
                    <Button>Login</Button>
                </Link>Login
                <Link to="/signup" sx={{textDecoration: "none"}}>
                    <Button>Sign Up</Button>
                </Link>
                <Link to="/aboutus" sx={{textDecoration: "none"}}>
                    <Button>About US</Button>
                </Link>
                <Link to="/listing" sx={{textDecoration: "none"}}>
                    <Button>Listing Page</Button>
                </Link>
                
              </Stack>
          </Box>
      </Drawer>
        </Box>
        
       <Outlet />
      
    </Box>
     
    
   
    
  );
}

export default App;
