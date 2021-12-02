import React from "react"

type Props = {
  id: string,
  brewery_name: string,
  brewery_type: string,
  street: string,
  address_2?: string | null,
  address_3?: string |null,
  city: string,
  state: string,
  postal_code: string | number,
  website_url: string,
}

const List: React.FC<Props>= ({
  address_2,
  address_3,
  brewery_name,
  brewery_type,
  city,
  id,
  postal_code,
  state,
  street,
  website_url
}) => {
  return (
    <div className={id}>
      <li>{brewery_name}</li>
      <label>Type</label>
      <li>{brewery_type}</li>
      <label>Address</label>
      <li>{city}</li>
      <li>{state}</li>
      <li>{street}</li>
      {address_2 &&<li>{address_2}</li>}
      {address_3 && <li>{address_3}</li>}
      <li>{postal_code}</li>
      <label>Website</label>
      <li>{website_url}</li>
      <br></br>
      <br></br>
    </div>


  )
}

export default List