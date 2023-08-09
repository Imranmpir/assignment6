import { Grid,Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const[data,setData]=useState([])
    const getData=async()=>{
        const result=await axios.get("http://localhost:1020/nav")
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return (

        <Grid container spacing={2} sx={{bgcolor:"silver",padding:"10px",marginBottom:"20px"}}>
            
         {
            
            data.map((item)=>
           
                
            <Grid item xs={item.xs}>
           <Link to={item.path}>
           <Button variant='contained' fullWidth color='warning'>{item.title}</Button>
           </Link>
            </Grid>
            
            )
         }
        </Grid>
    );
};

export default Nav;