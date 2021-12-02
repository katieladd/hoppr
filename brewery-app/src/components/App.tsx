import React, { useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';
import '../App.css';

export type Brewery = {
    name: string;
    id: string;
    brewery_name: string;
    brewery_type: string;
    street: string;
    address_2: string | null;
    address_3: string |null;
    city: string;
    state: string;
    county_province: null | string;
    postal_code: string | number;
    country: string;
    longitude: number;
    latitude: number;
    phone: number;
    website_url: string;
    updated_at: string;
    created_at: string;
}

const App: React.FC = () => {
  const [city, setCity] = useState('Harrisburg');
  const [brewList, setBrewList] = useState<Brewery[]>([])

  const getCityBreweryList = (city: string) => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
    .then((response) => {
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
          onChange={e => setCity(e.target.value)}/>
        </label>
        <input type='submit' value='Submit' />
      </form>
      <div className='list-container'>
        { brewList && brewList.map((brewery) => {
          return <List
            key={brewery.id}
            id={brewery.id}
            brewery_name={brewery.name}
            brewery_type={brewery.brewery_type}
            street={brewery.street}
            address_2={brewery.address_2}
            address_3={brewery.address_3}
            city={brewery.city}
            state={brewery.state}
            postal_code={brewery.postal_code}
            website_url={brewery.website_url}
          />
        })}
      </div>
    </div>

  );
}

export default App;

