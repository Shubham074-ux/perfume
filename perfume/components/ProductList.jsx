
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//see the list of available products
const ProductList = () => {
  //to set product as response from server 
  const [products, setProducts] = useState([]);

  // fetch product data from server 
  useEffect(() => {
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
    <div
      className="flex flex-wrap justify-center gap-4 p-6"
      style={{
        backgroundImage:"url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0AMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAABAMBBgL/xAAaEAEBAQEBAQEAAAAAAAAAAAAAEhFhAVEC/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9xprPTXQcZprusddoGmu6y0oGumsqKBrprKiga6ayooGumsqKBrprKiga6ayo0GumsqKBrprKigaaay13Qaaaz1zQY0UxopeJbUUxoog2opjRRBtRTGiiDaimNFEG1FMaKINqKY0UQbUUxoog2opjRRBtRTGiiDaimNFEG1FMaKINqKY0UQYWWnsteCiy09lkFFlp7LIKLLT2WQUUUnssgosr1PZZBRZXqeyyCiy09lkFFlep7LIKLLT2WQUWWnssgor0tPZZBRbtprLIJ7LT2W0iVFlp7LIKLLT2WQUWWnssgostPZZBRZaeyyCiy09lkFFlp7LIKLLT2WQUWWnssgostPZZBRZaeyyCiy09lkE99L6mstrBTfS+prLIKb6X1NZZBTfS+prLIKb6X1NZZBTfS+prLIKb6X1NZZBTfS+prLIKb6X1NZZBTfS+prLIKb6X1NZZBTfS+prLIKb6X1NZZBNZae/S/WsFFlp79L9IKLLT36X6QUWWnv0v0gostPfpfpBRZae/S/SCiy09+l+kFFlp79L9IKLLT36X6QUWWnv0v0gostPfpfpBRZae/S/SCiy09+l+kE1lp7LaRKiy09lkFFlp7LIKLLT2WQUWWnssgostPZZBRZaeyyCiy09lkFFlp7LIKLLT2WQUWWnssgostPZZBRZaeyyCey2FFLwb2Wwoog3sthRRBvZbCiiDey2FFEG9lsKKIN7LYUUQb2Wwoog3sthRRBvZbCiiDey2FFEG9lsK9KIN7LYUV6QY701jXSutINtNY10rpBtprCvfrvn69+kG2msa6V0g201jXSukG2m9Y10r36QbaaxrpXSDbTWNdK6QbaaxrpXSDbTWNdK6QbaaxrpXSDbemsa6e/r36Qbab1jXSukHxp4CVz0AA0ANAA00ANdAHPHQBzT30ADQA00ADQA00Ad8c0Af//Z')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* map the products according to product id */}
      {products.map((product) => (
//link to add dynamic routing on basis of product id 
<Link to={`/product/${product._id}`} key={product._id}>
          <div
            className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-between p-4 transition-transform duration-300"
            style={{
              height: "270px",
              width: "270px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            //to add transform effect on card when hovered
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
            }}
            
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover rounded mb-2"
              style={{ height: "180px", width: "180px" }}
            />
            <div className="text-center">
              <h2 className="text-sm md:text-md font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm md:text-md font-semibold text-blue-600">${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
