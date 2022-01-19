// import { Typography } from "@mui/material";
// import { useState } from "react";
// export default function Typo() {
//     const [ category] = useState([
//         {
//             "category": "Agriculture"
//         },
//         {
//             "category": "Farming"
//         },
//         {
//             "category": "Fishery"
//         },
        
//     ])
//     category.map((item, idx) => {
//         console.log(item)
//     })
   
//     return (
//         <>
//         {category.map(function(item, index){
//             return (
                
//                 <Typography key={index} sx={{background: "#FF4500", textAlign: "center", color: "#fff", p: 2, borderRadius: "10px", cursor: "pointer", width: {xs: "100%", md: "50%"}}}>{item.category}</Typography>
//             )
//         })}
//         </>
//     )
// }