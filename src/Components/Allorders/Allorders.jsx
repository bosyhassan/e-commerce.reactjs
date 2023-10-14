import axios from 'axios';
import jwtDecode from 'jwt-decode'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { ColorRing } from 'react-loader-spinner';

export default function Allorders() {

    const [userorders,setUserorders] = useState(null);

    useEffect(function(){
      const res=  jwtDecode(localStorage.getItem('tkn'));
      getUserOrders(res.id)
    },[]);

    if(userorders === null){
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
  async function getUserOrders(id){
    try {
      const {data} = await  axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
      setUserorders(data);
    } catch (error) {
        console.log(error);
    }
  }

  return  <>
      <div className='container'>
        <div className='row g-4'>
            {userorders.map(function(order,idx){
                return  <div key={idx} className='col-md-6 py-4'>
                <div className='order footer-bg rounded-4'>
                    <div className='container'>
                        <div className='row'>
                    {order.cartItems.map(function(item,index){
                        return <div key={index} className='col-sm-4 '>
                            <div className='bg-success my-1'>
                            <img src={item.product.imageCover} className='w-100' alt={item.product.title}/>
                            <h6 className='text-center'>{item.product.title.split(' ').slice(0,2).join(' ')}</h6>
                            <p className='text-center'>Count: {item.count}</p>
                            <p className='text-center'>Price: {item.price}</p>
                            </div>
                        </div>
                    })}
                    </div>
                    </div>
                    
                   <p className='text-center'>Order Sent to User With city:{order.shippingAddress.city}</p>
                   <p className='text-center'>Total Order Price: {order.totalOrderPrice}</p>
                </div>
            </div>
            })}
           
        </div>
      </div>
    </>
  
}
