import axios from 'axios';

export function fetchData(originLocation) {
  const latitude= originLocation.latitude
  const longitude= originLocation.longitude
  return axios
    .get(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=30&offset=0&unisex=true&lat=${latitude}&lng=${longitude}`)
    .then((response) => {
      return response.data
    })
}