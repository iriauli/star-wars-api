import axios from "axios";

const API_URL = process.env.REACT_APP_STAR_WARS_API;

async function GetPeopleInfo(id) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/people/${id}`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetFilmsInfo(id) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/films/${id}`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetStarshipsInfo(id) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/starships/${id}`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetVehiclesInfo(id) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/vehicles/${id}`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetSpeciesInfo(id) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/species/${id}`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function GetPlanetsInfo(id) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${API_URL}/planets/${id}`,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export {
  GetPeopleInfo,
  GetFilmsInfo,
  GetStarshipsInfo,
  GetVehiclesInfo,
  GetSpeciesInfo,
  GetPlanetsInfo,
};
