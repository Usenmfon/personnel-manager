import { Button, Container, Grid, Typography } from "@mui/material";

export default function SingleStaff(props) {
  return (
  <Container>
    <Grid container spacing={5}>
      <Grid item xs={8}>
        <Typography> Full Name </Typography>
        <Typography> 0803213212  <span style={{marginLeft:'20px'}}> name@mail.com </span> </Typography>
        <Typography> @username </Typography>
      </Grid>
      <Grid item xs={4} sx={{textAlign:'right'}}>
        <Button variant="contained"> Delete </Button>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography> <span style={{fontWeight:'600'}}> Role: </span>  Teacher </Typography>
        <Typography> <span style={{fontWeight:'600'}}> Date of Birth: </span>  20-02-1990 </Typography>
        <Typography> <span style={{fontWeight:'600'}}> Hired on: </span>  20-05-2020 </Typography>
      </Grid>


      <Grid item xs={12} sm={6}>
        <Typography> <span style={{fontWeight:'600'}}> Highest Degree: </span>  Bachelor of Science(Bsc) </Typography>
        <Typography> <span style={{fontWeight:'600'}}> School Attended: </span>  University of Uyo</Typography>
      </Grid>
    </Grid>
  </Container>
  )
}