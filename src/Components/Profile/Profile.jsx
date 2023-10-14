import jwtDecode from 'jwt-decode';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Grid } from 'react-loader-spinner';


export default function Profile() {
  const [name,setName] = useState(null);
  useEffect(()=>{
  const data =  jwtDecode(localStorage.getItem('tkn'));
  setName(data.name);
  },[]);
  if(name === null){
    return <div className='vh-100 align-items-center d-flex justify-content-center'>
          <Grid
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</div>  
  }
  return (
    <>
      <div className='container'>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <h1 className='text-center'>Hello Ya {name}</h1>
        </div>
      </div>
    </>
  )
}
