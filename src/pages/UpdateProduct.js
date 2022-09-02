import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";


const UpdateProduct = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const navigate = useNavigate();
  const {id} = useParams();

  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: ''
  })

  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then(response => {
      setProduct(response.data)
    }).catch(error => {
      console.log(error)
    });
  }, [id])


  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct(() => {
      return { ...product, [id]: value }
    })
  }

  const handleClick = () => {
    axios.put(`http://localhost:3000/products/${id}`, product)
    .then(response => {
        navigate('/products')
    }).catch(error => {
      console.log(error)
    });
  }
  return (
    <div className="Auth-form-container">
    <form   onSubmit={handleSubmit(onSubmit)} className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Update Product</h3>

        <div className="form-group mt-3">
          <label>Name</label>
          <input onChange={handleChange} value={product.name} id='name' type="text" className="form-control mt-1" placeholder="Enter Name" />
        </div>

        <div className="form-group mt-3">
          <label>Quantity</label>
          <input onChange={handleChange} value={product.quantity} id='quantity' type="text" className="form-control mt-1" placeholder="Enter Quantity" />
        </div>

        <div className="form-group mt-3">
          <label>Price</label>
          <input onChange={handleChange} value={product.price}  id='price' type="text" className="form-control mt-1" placeholder="Enter Price" />
        </div>

        <div className="d-grid gap-2 mt-3">
          <button onClick={handleClick} type="button" className="btn btn-primary">Update </button>
        </div>
        <div className="d-grid gap-2 mt-3">
          <Link to="/products" className='btn btn-link'>Cancel</Link>
        </div>
      </div>

    </form>
  </div>
  )
}

export default  UpdateProduct;
