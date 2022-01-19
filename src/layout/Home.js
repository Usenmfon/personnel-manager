import { Outlet } from "react-router";
import { Container } from "@mui/material";
export default function HomeLayout(props) {
  return (
    <Container disableGutters maxWidth={false}>
      <Outlet />
    </Container>
  )
}