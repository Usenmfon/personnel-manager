import { Container } from "@mui/material";
import { Outlet } from 'react-router-dom'

export default function UserLayout(props) {
  return (
    <Container disableGutters maxWidth={false}>
      <Outlet />
    </Container>
  )
}