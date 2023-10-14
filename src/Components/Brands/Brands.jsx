import axios from 'axios'
import React from 'react'
import { ColorRing } from 'react-loader-spinner';
import { useQuery } from 'react-query';

export default function Brands() {
  
 async  function getAllBrands(){
   const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/brands");
    return data;
  }
 const {isLoading,data}= useQuery("allbrands",getAllBrands);
  
  if(isLoading){
    return <div className="vh-100 d-flex justify-content-center align-items-center">
      <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    </div>
   }

  return <>
   <div className='container py-5'>
    <div className='row g-4 mb-5'>
      {data.data?.map(function(brand,idx){ return <div key={idx} className='col-md-3'>
        <div className='brand'>
          <img  src={brand.image} alt={brand.name} />
          <h5 className='text-center main-color'>{brand.name}</h5>
        </div>
      </div>})}
    </div>
   </div>
  </>
}
