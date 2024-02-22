import axios from 'axios';

export function fetchData(originLocation) {
  return axios
    .get(`https://www.refugerestrooms.org/api/v1/restrooms/by_location`, {
      params: {
        "page": 1,
        "per_page": 50,
        "offset": 0,
        "lat": originLocation.latitude,
        "lng": originLocation.longitude,
        "ada": originLocation.ada,
        "unisex": originLocation.unisex,
        "changing_table": originLocation.changing_table
      }
    })
    .then((response) => {
      return response.data
    })
}

