import React, { useState, useEffect } from 'react';
import { Brewery } from './App';
import axios from 'axios';
import List from "./List"

const Home: React.FC = () => {
  const [city, setCity] = useState('Harrisburg');
  const [brewList, setBrewList] = useState<Brewery[]>([])

  const getCityBreweryList = (city: string) => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
    .then((response: { data: React.SetStateAction<Brewery[]>; }) => {
      if (response.data)
      setBrewList(response.data)
    })
    .catch((e: Error) => {
      console.log(e);
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof city === 'string') {
      if (city.includes(' ')) {
        city.replace(' ', '_')
      }
      getCityBreweryList(city.toLowerCase());
    }
  }

  useEffect(() => {
  }, [])
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Please enter a city to search breweries by!:
        <input
          className='city-input'
          type='text'
          value={city}
          onChange={e => setCity(e.target.value)} />
      </label>
      <input type='submit' value='Submit' />
    </form>
    <div className='list-container'>
      {brewList?.map(listItem => (
        <List
          listItem={listItem}
          key={listItem.id}
        />
      ))}
    </div>
  </div>
  )
}

export default Home;