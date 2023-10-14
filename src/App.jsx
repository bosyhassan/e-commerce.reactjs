
import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Products from "./Components/Products/Products"
import Layout from './Components/Layout/Layout'
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Profile from "./Components/Profile/Profile"
import Category from "./Components/Category/Category"
import Brands from "./Components/Brands/Brands"
import Notfound from "./Components/Notfound/Notfound"
import AuthProvider from "./Context/authantication"
import ProtectedRoute from './Components/Test/Test'
import { QueryClient, QueryClientProvider } from 'react-query'
import Productdetails from './Components/ProductDetails/Productdetails'
import { CartContextProvider } from './Context/Cartcontext'
import { cartContext } from './Context/Cartcontext'
import { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import Cart from './Components/Cart/Cart'
import Payment from './Components/Payment/Payment'
import Allorders from './Components/Allorders/Allorders'
import { Offline } from 'react-detect-offline'
import Forgetpass from './Components/Forgetpass/Forgetpass'
import Resetpass from './Components/Resetpass/Resetpass'
import { RouterProvider,createBrowserRouter,createHashRouter } from 'react-router-dom'
const myRouter= createHashRouter([
    {path:"/",element:<Layout/>,children:[
    {path:"",element: <ProtectedRoute>
      <Products/>
    </ProtectedRoute>},
    {path: "products",element: <ProtectedRoute>
      <Products/>
    </ProtectedRoute>},
    {path: "login",element: <Login/>},
    {path: "register",element: <Register/>},
    {path: "profile",element: <ProtectedRoute>
      <Profile/>
    </ProtectedRoute>},

{path: "payment",element: <ProtectedRoute>
<Payment/>
</ProtectedRoute>},

{path: "allorders",element: <ProtectedRoute>
<Allorders/>
</ProtectedRoute>},

    {path: "category",element: <ProtectedRoute>
      <Category/>
    </ProtectedRoute>},

{path: "forgetpass",element:<Forgetpass/>},
{path: "resetpass",element:<Resetpass/>},


{path: "cart",element: <ProtectedRoute>
<Cart/>
</ProtectedRoute>},

    {path: "brands",element: <ProtectedRoute>
      <Brands/>
    </ProtectedRoute>},
     {path: "productdetails/:id",element: <ProtectedRoute>
     <Productdetails/>
   </ProtectedRoute>},
    {path: "*",element: <Notfound/>},
    
  ]}
]);

export default function App() {
  let clientQuery=new QueryClient();
  return <>
    
    <QueryClientProvider client={clientQuery}>
      <CartContextProvider>
    <AuthProvider>
      <RouterProvider router={myRouter}/>
    </AuthProvider>
    <Toaster/>
    </CartContextProvider>
    </QueryClientProvider>
    

    <Offline>
      <div className='position-fixed bottom-0 start-0 bg-dark text-center p-3 rounded-3 text-white'>Oops You Are Offline Now....</div>
    </Offline>
    </>
}

