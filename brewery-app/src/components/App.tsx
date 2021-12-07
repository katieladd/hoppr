import React from "react";
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
  longitude: number;
  latitude: number;
  phone: number;
  website_url: string;
  updated_at: string;
  created_at: string;
}

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<BreweryDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;