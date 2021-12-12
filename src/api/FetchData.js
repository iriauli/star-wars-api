import axios from "axios";

const API_URL = process.env.REACT_APP_STAR_WARS_API;

async function GetPeople() {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/people/`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetFilms() {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/films/`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetStarships() {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/starships/`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetVehicles() {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/vehicles/`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetSpecies() {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/species/`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetPlanets() {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/planets/`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export {
  GetPeople,
  GetFilms,
  GetStarships,
  GetVehicles,
  GetSpecies,
  GetPlanets,
};
