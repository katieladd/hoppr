const Brewery = require("../database/model/brewery")

const getByCity = async (req, res) => {
  const city = req.query.by_city;
  const count = 25;
  const response = await Brewery.find({ "city": city })
    .limit(count)

  res.status(200).json(response);
}

const getById = async (req, res) => {
  const id = req.query.id;

  const response = await Brewery.find({ "_id": id })

    res.status(200).json(response);
}

module.exports = {
  getByCity,
  getById
}