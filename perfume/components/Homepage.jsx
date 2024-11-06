import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Homepage = () => {
      const [products, setProducts] = useState([]);
//frtch data for first 4 product to feature on homepage    
      useEffect(() => {
        // Fetch products from the backend
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);
    
      return ( 
        <div className=' min-h-screen' style={{backgroundImage:"url('static/bluebg.jpg')",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",

        }}>
<div className='flex justify-center items-center'>
{/* <img src="" alt="" 
style={{
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    height:'200px',
    width:'1120px'
}}
/> */}
</div>

             <h1 className='flex font-serif justify-center ' style={{fontSize:"132px",color:"hotPink"}} >Aro <span className='font-bold' style={{color:"lightblue"}} >Mania</span> </h1>
             <br />
             <br />
             <h1 className='flex justify-center font-thin text-2xl' style={{color:"white"}}>Featured:</h1>
            <div className="flex flex-wrap justify-center gap-4 p-6"> 
         
          {products.slice(0, 4).map(product => (
            <div
              key={product._id}
              className="bg-white rounded-lg  shadow-lg overflow-hidden h-28 w-28 flex flex-col items-center justify-between p-2 transform transition hover:scale-105 hover:shadow-2xl"
              style={{border:"1px solid black" , backgroundImage:"URL('')",backgroundColor:""}}
            >
              <img src={product.imageUrl} alt={product.name} className="h-20 w-20 object-cover" />
              <div className="text-center text-black">
                <h2 className="text-sm font-bold text-gray-800">{product.name}</h2>
                {/* <p className="text-xs text-gray-600">{product.description}</p> */}
                <p className="text-sm font-semibold text-blue-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
          )
    };
    
    export default Homepage;
    