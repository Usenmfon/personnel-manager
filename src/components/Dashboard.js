import { Delete, VerifiedUser } from "@mui/icons-material"
import { Button, Card, CardContent, Chip, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllStaff } from "../services/staff"


const items = [
  { title: 'Total', value: 0 },
  { title: 'Active Staff', value: 0 },
  { title: 'Inactive Staff', value: 0 },
  { title: 'Conferences', value: 5 },
]

const event = [
  { title: 'New teaching method', date: "20-04-2022", type: "seminar", location: 'Uyo, Akaw Ibom State' },
  { title: 'New teaching sa', date: "20-04-2022", type: "seminar", location: 'Uyo, Akaw Ibom State' },
]

export default function UserDashboard() {

  const navigate = useNavigate()

  const [staffs, setStaffs] = useState([])
  const [stats, setStats] = useState(items)


  useEffect(()=>{
    getAllStaff().then((data)=>{
      const active = data.filter((item)=> item.age <= 60)
      const tempStats = items
      tempStats[0].value = data.length
      tempStats[1].value = active.length
      tempStats[2].value = data.length - active.length
      setStaffs(active.slice(0,5))
      setStats([...tempStats])
    })
  },[])


  return (
    <Grid container spacing={5}>
      {
        stats.map((item) => (
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