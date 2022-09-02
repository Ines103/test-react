import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AddProduct = () => {
  const navigate = useNavigate();
  
  
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct(() => {
      return { ...product, [id]: value }
    })
  }

  const handleClick = () => {
    axios.post('http://localhost:3000/products', product)
      .then(response => {
          navigate('/products')
      }).catch(error => {
        console.log(error)
      });
  }



  return (
    <div className="Auth-form-container">
      <form className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add Products</h3>

          <div className="form-group mt-3">
            <label>Name</label>
            <input  onChange={handleChange} id='name' type="text" className="form-control mt-1" placeholder="Enter Name" />
          </div>

          <div className="form-group mt-3">
            <label>Quantity</label>
            <input onChange={handleChange}  id='quantity' type="text" className="form-control mt-1" placeholder="Enter Quantity" />
          </div>

          <div className="form-group mt-3">
            <label>Price</label>
            <input  onChange={handleChange} id='price' type="text" className="form-control mt-1" placeholder="Enter Price" />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button onClick={handleClick} type="submit" className="btn btn-primary">Add </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link to="/products" className='btn btn-link'>Cancel</Link>
          </div>
        </div>

      </form>
    </div>
  )
}

export default AddProduct;
