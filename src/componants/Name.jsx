import React, {useState} from "react";
import { Grid,TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Name=()=>{
 const [name, setName]=useState("")
 const [spl, setSpl]=useState("")

 const navigate = useNavigate();
 const handleSubmit=async()=>{

 const payload={
  name,
  spl,
 }
 await axios.post("http://localhost:1020/addname", payload)
 navigate("/")
 }

 return(
 <Grid container spacing={2} sx={{marginTop:"20px"}}>
 <Grid item xs={4}>
 <TextField onChange={(e)=> setName(e.target.value)} variant="outlined" fullWidth label="Fname" />
 </Grid> 
 <Grid item xs={4}>
  <TextField onChange={(e)=> setSpl(e.target.value)} variant="outlined" fullWidth label="Lname" />
 </Grid>
 <Grid item xs={4}>
  <Button onClick={handleSubmit} sx={{height:55}} variant="contained" fullWidth>ADD</Button>
 </Grid>
 </Grid>
)
}