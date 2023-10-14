import React from 'react'

export default function Footer() {
  return <>
    <footer className='footer-bg py-4 mt-auto'>
      <div className='container'>
      <h2>Get The FreshCart App</h2>
      <p>We Will Send You a Link,open it on your phone to download the app</p>
      <form className='d-flex'>
      <input placeholder='Enter..' type='text' className='form-control w-75' />
      <button type='submit' className='btn btn-success ms-2'>Share App Link</button>
      </form>
      <div className='row border border-1 border-start-0 border-end-0 mt-4'>
        <div className='col'>
          <div className='d-flex align-items-center py-2'>
            <p>Payment Partners</p>
            <img src={require('../../images/Amazon_Pay_logo.svg.f1d7ed8012ba50041d47.png')} className='mb-1 ms-3' style={{width:'80px' ,height:'20px'}}/>
            <img src={require('../../images/American-Express-Color.338cd681a6afc75592a3.png')} className='mb-1 ms-3' style={{width:'80px' ,height:'20px'}}/>
            <img src={require('../../images/Google_Play_Store_badge_EN.svg.eb8bd3bc1f11fd061057.png')} className='mb-1 ms-3' style={{width:'80px' ,height:'20px'}}/>
            <img src={require('../../images/MasterCard_Logo.svg.cbdfb6078b7efff912d4.webp')} className='mb-1 ms-3' style={{width:'80px' ,height:'20px'}}/>
            <img/>
            <img/>
            <img/>
          </div>
        </div>
        <div className='col'>
        <div className='d-flex align-items-center'>
          <p className='p-0 m-0'>Get deliveries with FreshCart</p>
          <img src={require('../../images/download.png')} className='mb-1 ms-3' style={{width:'100px' ,height:'30px'}}/>
          <img src={require('../../images/Google_Play_Store_badge_EN.svg.eb8bd3bc1f11fd061057.png')} className='mb-1 ms-3' style={{width:'100px' ,height:'30px'}}/>
         </div>
        </div>
      </div>
      </div>
    </footer>
  </>
}
