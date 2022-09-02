import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';

const initialValues = {
  email: '',
  password: ''
}

const validate = values => {
  let errors = {}
  if (!values.email) {
    errors.email = 'Required'  //a string value indicate the error msg
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { //if the email has been entered, we test its format
    errors.email = 'Invalid email format'
  }

  if (!values.password) {
    errors.password = 'Required'
  }
  return errors //the fct must return an object
}

 



const Login = () => {
  
  
  const navigate = useNavigate();

  // const [login, setLogin] = useState({ email: '', password: '' })

  // const handleChange = (e) => {
  //   const { id, value } = e.target
  //   setLogin(() => { return { ...login, [id]: value } })
  // }
  const onSubmit = async (values, { setSubmitting }) => {
    const userList =  await axios.get('http://localhost:3000/users')
    
    let User = userList.data.find(({ email, password }) => email === values.email && password === values.password)
    // console.log(User);
    if (User !== undefined) {
      navigate('/products')
    } else {
      alert('please verify your email and password')
    }
  }
  // const HandleClick = async () => {
  //   const userList = await axios.get('http://localhost:3000/users')

  //   let User = userList.data.find(({ email, password }) => email === login.email && password === login.password)
  //   // console.log(User);
  //   if (User !== undefined) {
  //     navigate('/products')
  //   } else {
  //     alert('please verify your email and password')
  //   }
  // }



  return (
    <div className="Auth-form-container">
    <Formik 
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
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

      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          <div className="form-group mt-3 form-control">
            <label>Email address</label>
            <input onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             id='email' type="email" className="form-control mt-1" placeholder="Enter email" />

            {errors.email && touched.email ? (<div className = 'error'>{errors.email} </div> ): null }

          </div>

          <div className="form-group mt-3 form-control">
            <label>Password</label>
            <input onChange={handleChange} 
            onBlur={handleBlur}
            value={values.password}
            id='password' type="password" className="form-control mt-1" placeholder="Enter password" />

            {errors.password && touched.password ? (<div className = 'error'>{errors.password} </div> ): null }

          </div>

          <div className="d-grid gap-2 mt-3">
            <button  disabled={isSubmitting} onClick={handleSubmit} type="button" className="btn btn-primary">Submit</button>
          </div>

        </div>
      </form>
      )}
    </Formik>
    </div>
  )
}

export default Login;
