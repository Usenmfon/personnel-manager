import { Button, Stack, Select, OutlinedInput, InputLabel, MenuItem, FormControl, ListItemText, Checkbox, TextField, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";


const items = [
  { id: "name", name: "name", label: "Full Name", placeholder: "Fane Fane"},
  { id: "phone", name: "phone", label: "Phone Number", placeholder: "+234 000 000 0000"},
  { id: "type", name: "type", label: "Type of Staff", placeholder: "+234 000 000 0000"},
  { id: "qualification", name: "qualification", label: "Qualification", placeholder: "+234 000 000 0000"},
  { id: "lga", name: "lga", label: "LGA", placeholder: "+234 000 000 0000"},
  { id: "age", name: "age", label: "Age", placeholder: "Fane Fane"},
  { id: "origin", name: "origin", label: "Cert. of Origin", placeholder: "Uyo, Nigeria"},
  { id: "referee", name: "referee", label: "Has a referee", placeholder: "+234 000 000 0000"},
  { id: "email", name: "email", label: "Email Address", placeholder: "johnp@gmail.com"},
  { id: "Gender", name: "gender", label: "Gender", placeholder: "+234 000 000 0000"},
]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'First School Cert.',
  'SSCE',
  'OND',
  'HND',
  'Bsc',
];


export default function AddStaff(props) {

  const [values,setValues] = useState({})

  const [qualification, setQualification] = useState([]);

  const [staff, setStaff] = useState('');

  const handleStaff = (event) => {
    setStaff(event.target.value);
  };

  const handletQualification = (event) => {
    const {
      target: { value },
    } = event;
    setQualification(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

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
              return item.id === "qualification" ? (
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Qualification</InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={qualification}
                      onChange={handletQualification}
                      input={<OutlinedInput label="Qualification" />}
                      renderValue={(selected) => selected.join(',')}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={qualification.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (item.id === "type" ? (
                  <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type of Staff</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={staff}
                label="Type of Staff"
                onChange={handleStaff}
              >
                <MenuItem value="Academic Staff">Academic Staff</MenuItem>
                <MenuItem value="Non Academic Staff">Non Academic Staff</MenuItem>
                <MenuItem value="Retired Staff">Retired Staff</MenuItem>
              </Select>
            </FormControl>
                ): (
                  
                  <TextField
                    fullWidth
                      key={item.id}
                      label={item.label}
                      id={item.id}
                      name={item.name}
                      onChange={handleChange}
                  />
                ))
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