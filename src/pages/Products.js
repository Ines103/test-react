
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

  const [products, setProducts] = useState([])

  const productList = async () => {
    const productsFound = await axios.get("http://localhost:3000/products")
    // console.log(productsFound.data)
    setProducts(productsFound.data)
  }
  useEffect(() => {
    productList()
  }, [])

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`)
    productList();
  }

  return (
    <div className='container'>

      <h3 className="p-3 text-center"> List of items</h3>

        <Link className="btn btn-primary mb-3" to="/products/create" >Add Product</Link>
      
      <table className="table table-bordered text-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products && products.map(product =>
            <tr key={product.id}>
              <td>{product.id} </td>
              <td>{product.name} </td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <Link className='btn btn-info' to={`/products/update/${product.id}`}>Update</Link>
                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  )
}

export default Products;
