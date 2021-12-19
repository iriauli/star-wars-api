import axios from "axios";

const API_URL = process.env.REACT_APP_STAR_WARS_API;

async function GetPeopleInfo(PersonId) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/people/${PersonId}`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetFilmsInfo(FilmId) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/films/${FilmId}`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

// async function GetStarshipsInfo(StarshipId) {
//   try {
//     const response = await axios.request({
//       method: "GET",
//       url: `${API_URL}/starships/${StarshipId}`,
//     });
//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// }

// async function GetVehiclesInfo(VehicleId) {
//   try {
//     const response = await axios.request({
//       method: "GET",
//       url: `${API_URL}/vehicles/${VehicleId}`,
//     });
//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// }

// async function GetSpeciesInfo(SpecieId) {
//   try {
//     const response = await axios.request({
//       method: "GET",
//       url: `${API_URL}/species/${SpecieId}`,
//     });
//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// }

// async function GetPlanetsInfo(PlanetId) {
//   try {
//     const response = await axios.request({
//       method: "GET",
//       url: `${API_URL}/planets/${PlanetId}`,
//     });
//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// }

export {
  GetPeopleInfo,
  GetFilmsInfo,
  // GetStarshipsInfo,
  // GetVehiclesInfo,
  // GetSpeciesInfo,
  // GetPlanetsInfo,
};
