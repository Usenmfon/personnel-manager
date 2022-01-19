import { Button,Stack,TextField, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";


const items = [
  { id: "name", name: "name", label: "Full Name", placeholder: "Fane Fane"},
  { id: "username", name: "username", label: "Username", placeholder: "Fane Fane"},
  { id: "email", name: "email", label: "Email Address", placeholder: "johnp@gmail.com"},
  { id: "phone", name: "phone", label: "Phone Number", placeholder: "+234 000 000 0000"},
  { id: "Gender", name: "gender", label: "Gender", placeholder: "+234 000 000 0000"},
  { id: "experience", name: "experience", label: "Experience", placeholder: "+234 000 000 0000"},
  { id: "degree", name: "degree", label: "Highest Degree", placeholder: "+234 000 000 0000"},
  { id: "location", name: "location", label: "Location", placeholder: "Uyo, Nigeria"},
]


export default function AddStaff(props) {

  const [values,setValues] = useState({})

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return(
  <Container>
    <Grid container spacing={5} justifyContent="center">
      <Grid item xs={12}>
        <Typography> Add New Staff </Typography>
      </Grid>

      <Grid item xs={10}>
        <Stack spacing={3}>
        {items.map((item) => {
              return (
                <TextField
                fullWidth
                  key={item.id}
                  label={item.label}
                  id={item.id}
                  name={item.name}
                  onChange={handleChange}
                />
              ) 
            })}
        </Stack>
        <Stack direction="row" sx={{my:5}} spacing={5} justifyContent="center">
          <Button variant="contained"> Add </Button>

        </Stack>
      </Grid>      
    </Grid>
  </Container>
  )

}