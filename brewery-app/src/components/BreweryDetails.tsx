import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Brewery, initBrewery } from "./App"
import Map from "./Map"

const BreweryDetails: React.FC = () => {
    const [breweryItem, setBreweryItem] = useState<Brewery>(initBrewery);
    const {id} = useParams();

    useEffect(() => {
      axios.get(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((response) => {
        if(response.data) {
          setBreweryItem(response.data)
        }
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
    }, [id])

    console.log(breweryItem.latitude)

  return (
    <div className='brewery-details-container'>
      {breweryItem.latitude && breweryItem.longitude ? <Map
        lat={breweryItem.latitude}
        lng={breweryItem.longitude}
      />
        : <div>
          No map data available for this brewery 😔
        </div>}
      <div className={`brewery-details-info-container`}>
        <h1>{breweryItem.name}</h1>
        <h2>
          <label>Address</label>
        </h2>
        <li>{breweryItem.city}</li>
        <li>{breweryItem.state}</li>
        <li>{breweryItem.street}</li>
        {breweryItem.address_2 && <li>{breweryItem.address_2}</li>}
        {breweryItem.address_3 && <li>{breweryItem.address_3}</li>}
        <li>{breweryItem.postal_code}</li>
        <Link to={`/`}>
          <button
            className='back-button'
            type='button'
          >
            Back to List</button>
        </Link>
      </div>
    </div>
  )
}

export default BreweryDetails;