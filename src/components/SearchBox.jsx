import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { getWeatherInfo } from '../services/api';

export default function SearchBox({ updateInfo }) {
  let [formData, setFormData] = useState({
    city: "",
    state: "",
    country: ""
  });

  let [error, setError] = useState(false);

  let handleChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let newInfo = await getWeatherInfo(formData.city, formData.state, formData.country);
      updateInfo(newInfo);
      setFormData({
        city: "",
        state: "",
        country: ""
      });
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id='city'
          label="City Name"
          onChange={handleChange}
          value={formData.city}
          name='city'
          required
        />
        <br /><br />
        <TextField
          id='state'
          label="State"
          onChange={handleChange}
          value={formData.state}
          name='state'
          required
        />
        <br /><br />
        <TextField
          id='countryCode'
          label="Country Code"
          onChange={handleChange}
          value={formData.country}
          name='country'
          required
        />
        <br /><br />
        <Button variant="contained" type='submit'>
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
