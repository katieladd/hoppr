import axios from "axios";
import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BreweryDetails from "./BreweryDetails";
import Header from "./Header";
import Home from "./Home";
import "../styles/app.css";

export interface Brewery {
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

export interface Props {
  brewList: Brewery[]
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

type FormEvent = React.FormEvent<HTMLFormElement>;

const App: React.FC = () => {
  const [brewList, setBrewList] = useState<Brewery[]>([initBrewery])
  const [city, setCity] = useState<string>("Harrisburg")
  const [response, setResponse] = useState("");

  const getCityBreweryList = (city: string) => {
    axios.get(`/breweries/city?by_city=${city}`)
    .then((response) => {
      if(response.data) {
        setBrewList(response.data)
      }
    })
    .catch((e: Error) => {
      console.log(e);
    });
  }

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    getCityBreweryList(city);
  }

  useEffect(() => {
    getCityBreweryList(city)
  }, [])

  return (
    <Router>
      <div></div>
      <Header
        city={city}
        setCity={setCity}
        handleOnSubmit={handleOnSubmit}
      />
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