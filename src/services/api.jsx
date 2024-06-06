import axios from 'axios';

const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "3060423f04236b39e238c973f3d692b5";

export const getWeatherInfo = async (city, state, country) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: `${city},${state},${country}`,
        appid: API_KEY,
        units: 'metric'
      }
    });
    const data = response.data;

    return {
      city,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description,
    };
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};
