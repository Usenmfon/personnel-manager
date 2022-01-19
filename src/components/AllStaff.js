import { Button, Container, Grid, Stack, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



const columns = [
  { id: "name", label: "Full Name", minWidth: 170 },
  { id: "role", label: "Role", minWidth: 100 },
  { id: "gender", label: "Gender", minWidth: 100},
  { id: "phone", label: "Phone", minWidth: 100 },
  // { id: "action", label: "ACTION", align: "right", minWidth: 100 },
];


const values = [
  {name:'Fane Fane',role:'Teacher',gender:'M',phone:'080232321'},
  {name:'Mercy Man',role:'Cleaner',gender:'F',phone:'080243321'}
]


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function AllStaff(props) {

  const navigate = useNavigate()

  const handleChange = (e)=>{
    console.log(e.target.value)
  }

  const moveToSingle = ()=>{
  console.log(navigate)
  navigate('/staff/single')
  }

  return (
  <Container>
    <Grid container spacing={5} justifyContent="end">

      <Grid item xs={12}>
        <Typography> All Staff </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Stack direction="row" spacing={4}>
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
                          {column.format?column.format(value):value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Button variant="contained"> Delete </Button>
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