import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BreweryDetails from "./BreweryDetails";
import Home from "./Home";
import "../App.css";

export type Brewery = {
  id: string;
  name: string;
  brewery_name: string;
  brewery_type: string;
  street: string;
  address_2: string | null;
  address_3: string |null;
  city: string;
  state: string;
  county_province: string | null;
  postal_code: string | number;
  country: string;
  longitude: string;
  latitude: string;
  phone: number;
  website_url: string;
  updated_at: string;
  created_at: string;
}

export const initBrewery: Brewery = {
  id: "",
  name: "",
  brewery_name: "",
  brewery_type: "",
  street: "",
  address_2: "",
  address_3: "",
  city: "",
  state: "",
  county_province: "",
  postal_code: "",
  country: "",
  longitude: "",
  latitude: "",
  phone: 0,
  website_url: "",
  updated_at: "",
  created_at: "",
};

export interface Props {
  brewList: Brewery[]
}

const App: React.FC = () => {
  const [brewList, setBrewList] = useState<Brewery[]>([initBrewery])
  const city = 'Syracuse';

  const getCityBreweryList = (city: string) => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
    .then((response) => {
      if(response.data) {
        setBrewList(response.data)
      }
    })
    .catch((e: Error) => {
      console.log(e);
    });
  }

  useEffect(() => {
    getCityBreweryList(city)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/"
          element={<Home
            brewList={brewList}
          />}
        />
        <Route path="/details/:id"
          element={<BreweryDetails
          />}
        />
      </Routes>
    </Router>
  );
}

export default App;