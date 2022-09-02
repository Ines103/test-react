import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import {  Formik, useFormik } from 'formik';

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const validate =values => {
    //values.firstName values.lastName values.email values.password
    //errors.firstName errors.lastName errors.email errors.password
    //errors.firstName = 'This field is required'
    let errors = {}

    if (!values.firstName){ //name is empty
      errors.firstName = 'Required' //the attributes sould be similar to the initial values
    }
    if (!values.lastName){ //name is empty
      errors.lastName = 'Required'
    }
    if (!values.email){ 
      errors.email = 'Required'  //a string value indicate the error msg
    }else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { //if the email has been entered, we test its format
        errors.email = 'Invalid email format'
      }
    
    if (!values.password){ 
      errors.password = 'Required'
    }
    return errors //the fct must return an object
 }


const Register = () => {

  const navigate = useNavigate();

  // const [user, setUser] = useState({
  //   firstName: 'ines',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // })

  // const handleChange = (e) => {
  //   const { id, value } = e.target
  //   setUser(() => {
  //     return { ...user, [id]: value }
  //   })
  // }
  // const handleSubmit = () => {
  //   axios.post('http://localhost:3000/users', user)
  //     .then(response => {
  //       // console.log(response);
  //       navigate('/login')
  //     }).catch(error => {
  //       console.log(error)
  //     });
  //   // console.log(users.data)
  // }

  // const handleSubmit = async () => {
  //   const users = await axios.get('http://localhost:3000/users',user)
  //   console.log(users.data)
  // }


  return (
    <div className="Auth-form-container">
      <Formik 
       initialValues={initialValues}
       validate={validate}

       onSubmit={(values, { setSubmitting }) => {
         axios.post('http://localhost:3000/users', values)
      .then(response => {
        // console.log(response);
        navigate('/login')
      }).catch(error => {
        console.log(error)
      });   
      }}>

{({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (

      <form  onSubmit ={handleSubmit}className="Auth-form">
        <div className="Auth-form-content">

          <h3 className="Auth-form-title">  Registration</h3>

          <div className="form-group mt-3 form-control">
            <label className="form__label" >First Name </label>
            <input onChange={handleChange} 
             onBlur={handleBlur}
             value={values.firstName}
             className="form__input" type="text" id="firstName" placeholder="First Name" />
            {errors.firstName && touched.firstName ? (<div className = 'error'>{errors.firstName} </div> ): null }

          </div>

          <div className="form-group mt-3 form-control">
            <label className="form__label" >Last Name </label>
            <input onChange={handleChange} 
            onBlur={handleBlur}
            value={values.lastName}
            type="text" name="" id="lastName" className="form__input" placeholder="LastName" />
            {errors.lastName  && touched.lastName ? (<div className = 'error'>{errors.lastName} </div> ): null }

          </div>


          <div className="form-group mt-3 form-control">
            <label className="form__label" >Email </label>
            <input onChange={handleChange} 
            onBlur={handleBlur}
            value={values.email}
            type="email" id="email" className="form__input" placeholder="Email" />
            {errors.email  && touched.email ? (<div className = 'error'>{errors.email} </div>) : null }

          </div>


          <div className="form-group mt-3 form-control">
            <label className="form__label" >Password </label>
            <input onChange={handleChange} 
            onBlur={handleBlur}
            value={values.password}
            className="form__input" type="password" id="password" placeholder="Password" />
            {errors.password  && touched.password  ? (<div className = 'error'>{errors.password} </div> ): null }

          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" disabled={isSubmitting} onClick={handleSubmit}>Register</button>
          </div>

          <Link to="/login" className='btn btn-link'>Go to login page </Link>


        </div>
      </form>
      )}
      </Formik>
    </div>
  )
}

export default Register
