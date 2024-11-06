
// after clicking on product this page appear according to product-id

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams(); // Retrieve the product ID from the URL
  const [product, setProduct] = useState(null); // to store the matched product data

// Fetch all products details using axios
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products'); 
      
      // Map the products and find the matching product from db
      response.data.map((item) => {
        if (item._id === productId) {
          setProduct(item); // Set the matched product to state
        }
      });
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [productId]);

  if (!product) return <div>Loading...</div>; // Show loading until product is fetched

  return (
    <div className="max-w-2xl flex justify-center mx-auto p-4 mt-20-">
      <img src={product.imageUrl} alt={product.name} className=" h-80  object-cover mb-4" 
      style={{height:"420px" , width:"350px" ,marginRight:"200px" }}
      
      />
      <div className=''>
        {/* product's name */}
      <h1 className="text-5xl ">{product.name.toUpperCase()}</h1>
      <hr style={{height: "3px", backgroundColor: "black", border: "none"}}/>
    <br /><br />
    {/* product price */}
      <h1 className='text-3xl font-bold' >${product.price}</h1>
<br /><br />
{/* desription of product */}
      <i className="text-gray-500 text-lg mt-2">{product.description}</i>
<br /><br />
{/* Available sizes */}
      {product.avl && <p className="text-gray-600 text-sm mt-2">Available sizes: {product.avl}</p>}

      </div>
    </div>
  );
};

export default ProductDetail;
