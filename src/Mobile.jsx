import React, { useEffect, useState } from "react";
import { Grid, Card,Button} from "@mui/material";
import axios from "axios";

export const Mobile=()=>{
    const [data,setdata]=useState([])
    const getdata=async()=>{
        const result= await axios.get("http://localhost:1020/mobile")
        setdata(result.data)
    }
    useEffect(()=>{
getdata()
    },[])
    return(
       
        <Grid container spacing={2} sx={{bgcolor:"lightyellow",height:"100vh"}}>
        {
           data.map((item)=>
           
         <Grid item xs={3} sx={{display:"flex",justifyContent:"center"}}>
            <Card >
         <img src={item.image} alt="" height={250} width={250} style={{padding:"20px"}}  /><br />
         <h2>{item.brand}</h2>
         <h3>RS:{item.price}</h3>
         <Button variant="contained" fullWidth>ADD</Button>
         </Card>
         </Grid>
         
           )

        }
        
        </Grid>
       
    )
}