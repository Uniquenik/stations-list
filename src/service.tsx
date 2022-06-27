import axios from "axios";
import {countriesListInterface} from "../pages/api/countries";
import {stationsListInterface} from "../pages/api/stations/data";

export const API_URL = '/api/'

const ENDPOINTS = {
    GENRES_LIST: () => `${API_URL+'genres'}`,
    COUNTRIES_LIST: () => `${API_URL+'countries'}`,
    STATIONS_LIST: () => `${API_URL+'stations'}`,
}

const $api = axios.create({
    headers: {
        'Access-Control-Allow-Credentials': '*',
    },
})

const Service = () => {
    const getGenres = async ():Promise<string[]> => {
        let response = await $api.get<string[]>(ENDPOINTS.GENRES_LIST())
        return response.data
    }
    const getCountries = async ():Promise<countriesListInterface[]> => {
        let response = await $api.get<countriesListInterface[]>(ENDPOINTS.COUNTRIES_LIST())
        return response.data
    }
    const getStations = async ():Promise<stationsListInterface[]> => {
        let response = await $api.get<stationsListInterface[]>(ENDPOINTS.STATIONS_LIST())
        console.log(response)
        return response.data
    }
    return {getGenres, getCountries, getStations}
}

export const AppService = Service()