import React, { useState } from 'react';
import axios from 'axios'

const Weather = () => {
  const [location, setLocation] = useState('')
  const [data, setData] = useState(null)
  const handleChange = (e) => {
    setLocation(e.target.value)
  }
  const handleClick = () => {
    const YOUR_ACCESS_KEY = "953b85b71d62273942397c2b081b608d"
    const params = {
      access_key: YOUR_ACCESS_KEY,
      query: location
    }
    axios.get(`http://api.weatherstack.com/current`, { params })
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title"> Type your location</h3>

          <div className="form-group mt-3">
            <label>Location</label>
            <input onChange={handleChange} type="text" className="form-control mt-1" placeholder="Enter your location" />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button onClick={handleClick} type="button" className="btn btn-primary">Get Data </button>
          </div>
          {
            data && 
            <div>
             Temperature :  {data.current.temperature} °
             It's : {data.current.weather_descriptions[0]}
            </div>
          }
        </div>

      </form>
    </div>
  )
}

export default Weather
