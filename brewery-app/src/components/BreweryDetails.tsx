import React from "react"
import { Brewery } from "./App"
import Map from "./Map"

type Props = {
  brewList: Brewery
}

const BreweryDetails: React.FC<Props>= ({ brewList }) => {

  return (
    <div className='brewery-details-container'>
      <Map
      lat={brewList.latitude}
      lng={brewList.longitude}
      />
      <div></div>
    </div>
  )
}

export default BreweryDetails;