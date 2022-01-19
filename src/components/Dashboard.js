<<<<<<< HEAD
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Staff', 'Conferences', 'Training', 'Hiring', 'Retirement'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
=======
import { Delete, VerifiedUser } from "@mui/icons-material"
import { Button, Card, CardContent, Chip, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"


const items = [
  { title: 'Active Staff', value: 10 },
  { title: 'Inactive Staff', value: 3 },
  { title: 'Seminars', value: 3 },
  { title: 'Conferences', value: 5 },
]

const staffs = [
  { name: 'Frank Frank', phone: "0802323121", email: "mail@mail.com" },
  { name: 'Frank sadsa', phone: "0802323121", email: "mail@mail.com" },
]

const event = [
  { title: 'New teaching method', date: "20-04-2022", type: "seminar", location: 'Uyo, Akaw Ibom State' },
  { title: 'New teaching sa', date: "20-04-2022", type: "seminar", location: 'Uyo, Akaw Ibom State' },
]

export default function UserDashboard() {

  const navigate = useNavigate()


  return (
    <Grid container spacing={5}>
      {
        items.map((item) => (
          <Grid key={item.title} item xs={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography> {item.title} </Typography>
                <Typography variant="h4"> {item.value} </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
      <Grid item xs={12} sm={7} md={8}>
        <Stack direction="row" justifyContent="space-between" >
          <Typography variant="h5"> New Staff </Typography>
          <Button onClick={()=>navigate('/account/staff')} > View All </Button>
        </Stack>
        <Card>
          <CardContent>
            <List>
              {
                staffs.map((item) => (
                  <ListItem key={item.name} secondaryAction={
                    <IconButton>
                      <Delete color="secondary" />
                    </IconButton>
                  }>
                    <ListItemIcon>
                      <VerifiedUser />
                    </ListItemIcon>
                    <ListItemText  primary={
                      <Typography  variant="h5"> {item.name} </Typography>

                    } secondary={
                      <Typography> {item.phone} <span style={{ marginLeft: '20px' }}> {item.email} </span> </Typography>
                    } />

                  </ListItem>
                ))
              }
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={5} md={4}>
        <Stack direction="row" justifyContent="space-between" >
          <Typography variant="h5"> Upcoming Event  </Typography>
        </Stack>
        <Card>
          <CardContent>
            <List>
              {
                event.map((item) => (
                  <ListItem key={item.title}>
                    <ListItemText primary={
                      <Stack direction="row" justifyContent="space-between" >
                        <Typography variant="h6"> {item.title} </Typography>
                        <Chip size="small" color="primary" label={item.type} />
                      </Stack>
                    } secondary={
                      <Typography> {item.date} <span style={{ marginLeft: '20px' }}> {item.location} </span> </Typography>
                    } />

                  </ListItem>
                ))
              }
            </List>

          </CardContent>
        </Card>
      </Grid>

    </Grid>
  )
}
>>>>>>> 24a6830698d8c32eab06f0e6f25615de7e4a827e
