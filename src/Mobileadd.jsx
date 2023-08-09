import React, { useState } from "react";
import { Grid,TextField, Button } from "@mui/material";
import axios from "axios";
// import { useNavigate } from "react-router-dom"

export const Mobileadd=()=>{
    const [image,setimage]=useState("")
    const [brand,setbrand]=useState("")
    const [price,setprice]=useState()

    // const navigate=useNavigate();
    const handle=async()=>{
        const payload={
            image,
            brand,
            price
        }
        await axios.post("http://localhost:1020/addmobile", payload)
        // navigate("/addpr")
    }
    return(
        <Grid container spacing={2} sx={{marginTop:"20px",bgcolor:"lightyellow",height:"100vh"}}>
            <Grid item xs={3}>
 <TextField onChange={(e)=> setimage(e.target.value)} variant="outlined" fullWidth label="url image" />
 </Grid> 
 <Grid item xs={3}>
  <TextField onChange={(e)=> setbrand(e.target.value)} variant="outlined" fullWidth label="brand name" />
 </Grid>
 <Grid item xs={3}>
  <TextField onChange={(e)=> setprice(e.target.value)} variant="outlined" fullWidth label="price" />
 </Grid>

 <Grid item xs={2}>
  <Button onClick={handle} sx={{height:55}} variant="contained" fullWidth>Submit</Button>
 </Grid>

        </Grid>
    )
}