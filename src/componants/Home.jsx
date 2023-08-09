import React, { useEffect, useState } from 'react';
import {Grid,Card} from "@mui/material"
import axios from "axios"

const Home = () => {
    const [data,Setdata]=useState([])
    const getdata= async()=>{
        const result = await axios.get("http://localhost:1020/name")
        Setdata(result.data)
    }
    useEffect(()=>{
getdata()
    },[])
    return (
        <Grid container spacing={2}>
{
    data.map((item)=>
   
<Grid item xs={3}>
    <Card sx={{textAlign:"center",padding:"10px",marginTop:"20px",color:"white",bgcolor:"red"}}>

<h1> {item.name} {item.spl}</h1>
</Card>
</Grid>
    


    )
}
        </Grid>
    );
};

export default Home;