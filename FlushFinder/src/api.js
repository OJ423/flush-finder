import axios from 'axios';

export function fetchData(currentLocation) {
  const latitude= currentLocation.latitude
  const longitude= currentLocation.longitude

  return axios
    .get(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=50&offset=0&unisex=true&lat=${latitude}&lng=${longitude}`)
    .then((response) => {
      return response.data
    })
}