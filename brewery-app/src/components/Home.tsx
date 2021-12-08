import React from "react";
import { Brewery, Props } from "./App";
import List from "./List"

const Home: React.FC<Props> = (
  {brewList}: {brewList: Brewery[]}
  ) => {
  return (
    <div>
    <div className='list-container'>
        {brewList?.map(listItem => (
        <List
          listItem={listItem}
          key={listItem.id}
        />
      ))}
    </div>
  </div>
  )
}

export default Home;