import React from "react"
import { Brewery } from "./App"

type Props = {
  listItem: Brewery;
}

const List: React.FC<Props> = ({listItem}) => {
  return (
    <div className={`item-container ${listItem.id}`}>
      <h1>{listItem.name}</h1>
      <h2>
        <label>Type:</label>
      </h2>
      <li>{listItem.brewery_type}</li>
      <h2>
        <label>Address</label>
      </h2>
      <li>{listItem.city}</li>
      <li>{listItem.state}</li>
      <li>{listItem.street}</li>
      {listItem.address_2 &&<li>{listItem.address_2}</li>}
      {listItem.address_3 && <li>{listItem.address_3}</li>}
      <li>{listItem.postal_code}</li>
      <h2>
        <label>Website</label>
      </h2>
      <li>{listItem.website_url}</li>
      <button>More Info</button>
      <br></br>
      <br></br>
    </div>
  )
}

export default List