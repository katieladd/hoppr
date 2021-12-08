import React from "react"
import { Link } from "react-router-dom";
import { Brewery } from "./App"

type Props = {
  listItem: Brewery;
}

const List: React.FC<Props> = ({listItem}) => {

  return (
    <div className={'item-container'}>
      <h2 className='item-name'>{listItem.name}</h2>
      <div>
        <label>Brewery Style: {listItem.brewery_type}</label>
      </div>
      <div className='label-div'>
        <label>Address:</label>
      </div>
      <li>{listItem.street}</li>
      {listItem.address_2 && <li>{listItem.address_2}</li>}
      {listItem.address_3 && <li>{listItem.address_3}</li>}
      <li>{listItem.city}, {listItem.state}</li>
      <div className='label-div'>
        <label>Website</label>
      </div>
      <a href={listItem.website_url}>{listItem.website_url}</a>
      <Link to={`details/${listItem.id}`}>
        <br/>
        <button
          className='more-details-button button'
          type='button'
        >
          More Details</button>
      </Link>
      <br></br>
      <br></br>
    </div>
  )
}

export default List