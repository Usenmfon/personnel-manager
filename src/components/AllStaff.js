import React from "react";
import { Delete } from "@mui/icons-material";
import { Button, Box, FormControl, InputLabel, Container, Select, MenuItem, Grid, IconButton, Stack, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



const columns = [
  { id: "name", label: "Full Name", minWidth: 170 },
  { id: "phone", label: "Phone No.", minWidth: 100 },
  { id: "lga", label: "LGA", minWidth: 100 },
  { id: "qualification", label: "Qualification", minWidth: 100 },
  { id: "age", label: "Age", minWidth: 100 },
  { id: "origin", label: "Cert. of origin", minWidth: 100 },
  { id: "referee", label: "Has a referee?", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "gender", label: "Gender", minWidth: 100 },
  // { id: "action", label: "ACTION", align: "right", minWidth: 100 },
];


const values = [
  { name: 'Fane Fane', phone: '080232321', lga: 'Uyo', qualification: 'B.sc', age: 34, origin: 'Null', referee: 'Yes', email: 'fanefane@gmail.com', gender: 'M',  },
  { name: 'Mercy Mendie', phone: '070243321', lga: 'Ikot Ekpene', qualification: 'HND', age: 27, origin: 'Null', referee: 'Yes', email: 'mercy@outlook.com', gender: 'F',  },
]


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function AllStaff(props) {

  const navigate = useNavigate()

  const [staff, setStaff] = React.useState('');

  const handleStaff = (event) => {
    setStaff(event.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const moveToSingle = () => {
    console.log(navigate)
    navigate('/account/staff/single')
  }

  return (
    <Container>
      <Grid container spacing={5} justifyContent="end">

        <Grid item xs={12}>
          <Typography variant="h4"> All Staff </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Stack direction="row" spacing={4}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={staff}
                label="Select"
                onChange={handleStaff}
              >
                <MenuItem value="Academic Staff">Academic Staff</MenuItem>
                <MenuItem value="Non Academic Staff">Non Academic Staff</MenuItem>
                <MenuItem value="Retired Staff">Retired Staff</MenuItem>
              </Select>
            </FormControl>
          </Box>
            <TextField label="Search" onChange={handleChange} name="search" />
            <Button variant="contained" > Search </Button>
          </Stack>
        </Grid>


        <Grid item xs={12}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </StyledTableCell>
                  ))}
                  <StyledTableCell>
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              {
                <TableBody>
                  {values
                    .map((row) => {
                      return (
                        <TableRow onClick={moveToSingle} hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id}>
                                {column.format ? column.format(value) : value}
                              </TableCell>
                            );
                          })}
                          <TableCell>
                            <IconButton>
                              <Delete color="secondary" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              }

            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  )
}