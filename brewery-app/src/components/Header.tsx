import React, { ChangeEvent, FormEvent } from "react";

type SubmitEvent = FormEvent<HTMLFormElement>
type InputEvent = ChangeEvent<HTMLInputElement>;

interface Props {
  city: string;
  setCity: (val: string) => void;
  handleOnSubmit: (e: SubmitEvent) => void;
}
const Header: React.FC<Props> = ({city, setCity, handleOnSubmit}) => {

  return (
    <div className='header-container'>
      <div className='Logo'>
        hoppr
      </div>
      <div className='header-text'>
        Let's get hoppin' in
      </div>
      <form onSubmit={handleOnSubmit}>
        <input
          className='city-input'
          type='text'
          placeholder='Harrisburg'
          onChange={(e: InputEvent) => setCity(e.target.value)}
        ></input>
        <button
          className='submit-city'
          type='submit'>
          Hop
        </button>
      </form>
    </div>
  )
}

export default Header;