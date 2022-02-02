import React, { useEffect, useState } from "react";
import { Delete, Search } from "@mui/icons-material";
import { FormControl, InputLabel, Container, Select, MenuItem, Grid, IconButton, Stack, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllStaff, staffType } from "../services/staff";



const columns = [
  { id: "name", label: "Full Name", minWidth: 170 },
  { id: "phone", label: "Phone No.", minWidth: 80 },
  { id: "lga", label: "LGA" },
  { id: "qualification", label: "Qualification",},
  { id: "gender", label: "Gender", minWidth: 20 },
  { id: "age", label: "Age", minWidth: 20 },
  //{ id: "origin", label: "Cert. of origin", minWidth: 100 },
  //{ id: "referee", label: "Has a referee?", minWidth: 100 },
  { id: "email", label: "Email", },
  // { id: "action", label: "ACTION", align: "right", minWidth: 100 },
];


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

  const [filter, setFilter] = React.useState({search:'',type:staffType[0]});
  const [staffs, setStaffs] = useState([])

  useEffect(() => {
    getAllStaff().then((data) => {
      setStaffs(data)
    })
  }, [])

  const handleFilter = (e) => {
    const {name,value} = e.target
    setFilter({...filter,[name]:value})
  }

  const moveToSingle = (index) => {
    navigate(`/account/staff/single/${index}`)
  }

  return (
    <Container>
      <Grid container spacing={5} justifyContent="end">

        <Grid item xs={12}>
          <Typography variant="h4"> All Staff </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Stack direction="row" justifyContent="end" spacing={4}>
            <FormControl size="small">
              <InputLabel>Select</InputLabel>
              <Select value={filter.type} name="type" label="Select" onChange={handleFilter} >
                {
                  staffType.map((item)=>(
                    <MenuItem key={item} value={item}> {item} </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <TextField InputProps={{
              endAdornment: <Search />
            }} size="small" label="Search" onChange={handleFilter} name="search" />
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
                  {staffs.filter((item)=>item.name.includes(filter.search) && item.type === filter.type ).map((row, index) => {
                      return (
                        <TableRow onClick={() => moveToSingle(index)} hover role="checkbox" tabIndex={-1} key={index}>
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