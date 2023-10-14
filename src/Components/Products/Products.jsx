import axios from "axios"
import { ColorRing } from "react-loader-spinner";
import { useQuery } from "react-query";
import Homeslider from "../HomeSlider/Homeslider";
import Categoryslider from "../Categoryslider/Categoryslider";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../Context/Cartcontext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";



export default function Products() {
 
 const {addProductToCart} = useContext(cartContext);
 
 async function addproduct(id){

  const res = await addProductToCart(id);

  try{
    if (res.status === "success") {
   
      toast.success(res.message,{
        duration:2000
      });
    }else{
      toast.error("Error Happend");
    }
  }catch(e){
    console.log(e);
  }
 }

 function getAllProducts(){
 return axios.get('https://ecommerce.routemisr.com/api/v1/products');
 }
 const {isError,isFetching,isLoading,data}= useQuery("allproducts",getAllProducts);

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
  return (
    <>

     <div className="container py-5">

      <div className="row gx-0 mb-5">
        <div className="col-sm-9">
          <Homeslider/>
         
        </div>
       
        <div className="col-sm-3">
          <img style={{width:"100%",height:"200px"}}  src={require('../../images/grocery-banner.png')}/>
          <img  style={{width:"100%",height:"200px"}} src={require('../../images/grocery-banner-2.jpeg')}/>
        </div>
      </div>
       <Categoryslider/>
        <div className="row g-4">
        {data?.data.data.map(function(product,idx){ return  <div key={idx} className="col-md-2">
          
           <div className="product">
           <Link to={`/Productdetails/${product.id}`}>
              <img src={product.imageCover} alt="product" className="w-100"/>
              <h6 className="main-color text-center">{product.category.name}</h6>
              <h5 className="text-center">{product.title.split(' ').slice(0,2).join("-")}</h5>
              <div className="d-flex justify-content-between">
              <p>{product.price} EGP</p>
              <p> <span><i className="fa-solid fa-star main-color"></i></span> {product.ratingsAverage}</p>
              </div>
              
              </Link>
            </div>
           
           <button onClick={() =>addproduct(product.id)} className="w-100 p-1 mt-2 rounded-3 main-bg-color border-white text-white">+ ADD To Cart</button>
          </div>})}

         
        </div>
      </div> 
     
    </>
  )
}
