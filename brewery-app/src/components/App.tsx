import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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

const initBrewery: Brewery = {
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
  longitude: 0,
  latitude: 0,
  phone: 0,
  website_url: "",
  updated_at: "",
  created_at: "",
};

const App: React.FC = () => {
  const [brewList, setBrewList] = useState<Brewery[]>([initBrewery])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home
          brewList={brewList}
          setBrewList={setBrewList}
        />}/>
        <Route path="/details" element={<BreweryDetails
          brewList={brewList}
        />}/>
      </Routes>
    </Router>
  );
}

export default App;