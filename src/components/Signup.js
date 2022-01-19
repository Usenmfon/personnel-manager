import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography";
// import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
// import Grid from '@mui/material/Grid';
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
// import { Link } from "react-router-dom"
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router";
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from "@mui/material/CircularProgress";
import { countryArray } from './countries'
// import sapapay from '../images/sapapay.svg'
// import Vector from '../images/Vector.png'

export default function Signup() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  

  const navigate = useNavigate();

  const submit = async function (e) {
    e.preventDefault();
    setError("");
    setLoading(true)
    if (data.username && data.email && data.fullname && data.password) {
      await signup(data)
        .then(() => {
            // console.log(data)
          navigate("/success");
        })
        .catch((e) => {
          console.log(e);
          setError(e.message);
        });
    } else {
      setError("input All fields");
    }
    setLoading(false)
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let countryValue = countryArray()
  console.log(countryValue[0])
  // const [sex, setSex] = useState("")

  // const handleSex = (event) => {
  //     setSex(event.target.value)
  // }

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     // eslint-disable-next-line no-console
  //     console.log({
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     });
  //   };

  return (
    <Container component="main" sx={{ minHeight: "85vh" }} maxWidth="sm"> 
      <Link to="/">
      <CloseIcon sx={{ mt: 3, color: "#FF4500", position: "relative", left: {md: "600px", sm: "400px" , xs: "300px"}}} />
      </Link>
      <Box sx={{ border: "1px solid #d3d3d3",mt: 4, p: 2, height: "inherit" }}>
        <Typography
          sx={{
            textAlign: "center",
            background: "#FF4500",
            p: 2,
            fontWeight: "bold",
            fontSize: "24px",
            color: "#fff",
          }}
        >
          Sign Up
        </Typography>

        <Box component="form" onSubmit={submit}>
          {error && <Alert severity="error">{error}</Alert>}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Typography sx={{ width: "50%" }}>Username</Typography>
              <TextField
                sx={{ width: "100%" }}
                required
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Typography sx={{ width: "50%" }}>Full Name</Typography>
              <TextField
                sx={{ width: "100%" }}
                required
                id="fullname"
                name="fullname"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Typography sx={{ width: "50%" }}>Password</Typography>
              <TextField
                sx={{ width: "100%" }}
                required
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          {/* <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{ width: "50%"}}>Username</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            required
                            id='email'
                            name="email"
                            type="text"
                            />
                        </FormControl>
                    </Box> */}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Typography sx={{ width: "50%" }}>Email</Typography>
              <TextField
                sx={{ width: "100%" }}
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }} component="form">
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Typography>Sex</Typography>
              <Select
                sx={{ width: "50%" }}
                id="sex"
                name="sex"
                type="text"
                // value={sex}
                // onChange={handleSex}
                onChange={handleChange}
              >
                <MenuItem value="male">MALE</MenuItem>
                <MenuItem value="female">FEMALE</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }} component="form">
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Typography>Country</Typography>
              <Select
                sx={{ width: "50%" }}
                id="country"
                name="country"
                type="text"
                // value={sex}
                // onChange={handleSex}
                onChange={handleChange}
              >
                { countryValue.map((country)=>{
                  return <MenuItem value={country}> {country} </MenuItem>
                }) }
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Typography sx={{ width: "50%" }}>Business/Brand Name</Typography>
              <TextField
                sx={{ width: "100%" }}
                required
                id="brand"
                name="brand"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Typography sx={{ width: "50%" }}>
                Business Phone Number
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                id="number"
                name="number"
                type="number"
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Typography sx={{ width: "50%" }}>Referral ID</Typography>
              <TextField
                sx={{ width: "100%" }}
                id="referral"
                name="referral"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          {/* <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{ width: "50%"}}>Business Image(optional)</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            id='image'
                            name="image"
                            type="image"
                            />
                        </FormControl>
                    </Box> */}

          {loading ? <div className="text-center"> <CircularProgress size={30} /></div> : <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ background: "#FF4500", color: "#fff" }}
          >
            Continue
          </Button>}
          
          {/* </Link> */}
        </Box>
      </Box>
    </Container>
  );
}
