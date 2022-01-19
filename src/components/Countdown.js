import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';


export default function Countdowntimer(props) {
    return (
            <Box sx={{ p: 2, width: '40%', height: '120px', display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", mt: 2}}>
            <Box   sx={{ background: props.background, color: props.color, p: 1, width: "100%", height: "inherit", border: "1px solid white", borderRadius: "10px", display: "flex", justifyContent: 'center', alignItems: "center"}}>
                <Typography sx={{fontSize: "1rem", fontWeight: "bold"}}>{props.Day}</Typography>
            </Box>
            <Typography sx={{mt: 2, color: "#fff", fontWeight: 'bold'}}>{props.Day}</Typography>
        </Box>
    )
}