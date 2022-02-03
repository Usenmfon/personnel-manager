import { Button, Stack, MenuItem, TextField, Container, Grid, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { createStaff, staffType } from "../services/staff";


const items = [
  { id: "name", name: "name", label: "Full Name", md: 6, placeholder: "Fane Fane" },
  { id: "referee", name: "referee", label: "Has a referee", placeholder: "+234 000 000 0000" },
  { id: "phone", name: "phone", type: 'tel', label: "Phone Number", placeholder: "+234 000 000 0000" },
  { id: "email", name: "email", type: 'email', label: "Email Address", placeholder: "johnp@gmail.com" },
  { id: "Gender", name: "gender", type: 'select', label: "Gender", placeholder: "+234 000 000 0000" },
  { id: "dob", name: "dob", label: "Date of Birth", type: 'date', placeholder: "Fane Fane" },
  { id: "type", name: "type", type: 'select', label: "Type of Staff", placeholder: "+234 000 000 0000" },
  { id: "qualification", name: "qualification", type: 'select', label: "Qualification", placeholder: "+234 000 000 0000" },
  { id: "faculty", name: "faculty", label: "Falculty", placeholder: "Biology" },
  { id: "department", name: "department", label: "Department", placeholder: "Junior" },
  { id: "lga", name: "lga", label: "LGA", placeholder: "+234 000 000 0000" },
  { id: "origin", name: "origin", label: "Cert. of Origin", placeholder: "Uyo, Nigeria" },
]

const defaultData = {}

items.forEach((item) => {
  defaultData[item.name] = ''
})


const names = [ 'First School Cert.', 'SSCE', 'OND', 'HND', 'Bsc', ]


const selectOptions = {
  type: staffType,
  qualification: [...names],
  gender: ['Male', 'Female']
}



export default function AddStaff(props) {

  const [values, setValues] = useState(defaultData)
  const [error, setError] = useState('')
  const [sucess, setSucess] = useState('')

  const submit = (e) => {
    e.preventDefault()

    if (Object.values(values).some((item) => !item)) {
      setError('Please input all fields and set image')
      return
    }

    createStaff(values).then(() => {
      setSucess('Staff created sucessfuly')
      e.target.reset()
    })

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Container>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12}>
        <Typography variant="h4"> Add Staff </Typography>

        </Grid>

        <Grid item xs={12}>
          {error && (
            <Alert severity="error">
              {error}
            </Alert>
          )}
          {sucess && (
            <Alert severity="success">
              {sucess}
            </Alert>
          )}
        </Grid>

        <Grid item xs={10}>
          <form onSubmit={submit}>

            <Grid container spacing={3}>
              {
                items.map((item) => (
                  <Grid item xs={12} sm={6} key={item.name}>
                    {
                      item.type === 'select'
                      ?
                        <TextField select fullWidth label={item.label} name={item.name} value={values[item.name]} onChange={handleChange}  >
                          {
                            selectOptions[item.name].map((option) => (
                              <MenuItem key={option} value={option} > {option} </MenuItem>
                            ))
                          }
                        </TextField>
                        : <TextField onChange={handleChange} type={item.type ?? 'text'} label={item.label} placeholder={item.placeholder} name={item.name} fullWidth />
                    }
                  </Grid>
                ))
              }
            </Grid>
            <Stack direction="row" sx={{ my: 5 }} spacing={5} justifyContent="center">
              <Button type="submit" variant="contained"> Add </Button>

            </Stack>
          </form>
        </Grid>
      </Grid>
    </Container>
  )

}