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
      axios.get(`/brewery/?id=${id}`)
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
    <div className="brewery-details-container">
      <div className="brewery-details-map">
        {breweryItem.latitude && breweryItem.longitude ? <Map
          lat={breweryItem.latitude}
          lng={breweryItem.longitude}
        />
        : <div>
          No map data available for this brewery 😔
        </div>}
      </div>
      <div className="brewery-details-info-container">
        <div className="brewery-item-name">{breweryItem.name}</div>
        <div className="brewery-info">
          <label>Address:</label>
          <div>{breweryItem.street}</div>
          {breweryItem.address_2 && <div>{breweryItem.address_2}</div>}
          {breweryItem.address_3 && <div>{breweryItem.address_3}</div>}
          <div>{breweryItem.city}, {breweryItem.state}</div>
          <div>{breweryItem.postal_code}</div>
        </div>
        <Link to={`/`}>
          <button
            className="back-button button"
            type="button"
          >
            Back to List</button>
        </Link>
      </div>
    </div>
  )
}

export default BreweryDetails;