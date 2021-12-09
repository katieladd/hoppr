const mongoose = require("mongoose");

const BrewerySchema = new mongoose.Schema({
  id: String,
  name: String,
  brewery_name: String,
  brewery_type: String,
  street: String,
  address_2: String,
  address_3: String,
  city: String,
  state: String,
  county_province: String,
  postal_code: String,
  country: String,
  longitude: String,
  latitude: String,
  phone: String,
  website_url: String,
  updated_at: String,
  created_at: String,
})
const Brewery = mongoose.model("brewery", BrewerySchema)

module.exports = Brewery;