import { Delete, Search } from "@mui/icons-material";
import { Container, Grid, IconButton, Stack, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography, } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllStaff } from "../services/staff";



const columns = [
  { id: "id", label: "ID" },
  { id: "name", label: "Full Name", },
  { id: "title", label: "Title",},
  { id: "gender", label: "Gender", },
  { id: "state", label: "State", },
  { id: "faculty", label: "Faculty", },
  { id: "department", label: "Department", },
  { id: "position", label: "Present Position", },

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


export default function RetiredStaff(props) {

  const navigate = useNavigate()

  const [staffs, setStaffs] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    getAllStaff().then((data) => {
      setStaffs(data.filter((item)=> item.age > 60))
    })
  }, [])


  const moveToSingle = (index) => {
    navigate(`/account/staff/single/${index}`)
  }


  return (
    <Container>
      <Grid container spacing={5} justifyContent="end">

        <Grid item xs={12}>
          <Typography variant="h4"> Retired Staff </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Stack direction="row" justifyContent="end" spacing={4}>
            <TextField InputProps={{
              endAdornment:<Search />
            }} size="small" label="Search" onChange={(e) => setSearch(e.target.value)} name="search" />
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
                  {staffs.filter((item) => (item.name.includes(search))).map((row,index) => {
                    return (
                      <TableRow onClick={moveToSingle} hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id] ?? index;
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