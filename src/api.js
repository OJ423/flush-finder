import axios from 'axios';

export function fetchData({ longitude, latitude, ada, unisex }) {
  const paramsObj ={
    "page": 1,
    "per_page": 50,
    "offset": 0,
    "lat": latitude,
    "lng": longitude,
  }

  ada ? paramsObj.ada = ada : null
  unisex ? paramsObj.unisex = unisex: null

  return axios
    .get(`https://www.refugerestrooms.org/api/v1/restrooms/by_location`, {
      params: paramsObj
    })
    .then((response) => {
      return response.data
    })
}

export function fetchCityToilets({ city, accessible, unisex, changing_table }) {
  const paramsObj = {}

  accessible ? paramsObj.accessible= accessible : null
  unisex ? paramsObj.unisex = unisex : null
  changing_table ? paramsObj.changing_table = changing_table : null

  return axios
  .get(`https://flush-finder-be.onrender.com/api/${city}/toilets`, {
    params: paramsObj
  })
  .then((response) => {
    return response.data.cityToilets[0].toilets
  })
}

// Cities API call

export function fetchCities() {
  return axios
    .get(`https://flush-finder-be.onrender.com/api/cities`)
    .then((response) => {
      return response.data.cities
    })
}

// Reviews Call

export function fetchComments(toiletID) {
  return axios
    .get(`https://flush-finder-be.onrender.com/api/reviews/${toiletID}`)
    .then((response) => {
      return response.data.reviews
    })
}

