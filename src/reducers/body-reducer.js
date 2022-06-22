import { bodyAPI } from "../API/api";
import { COUNTRIES } from "../API/countries";

const GET_DATA = "GET_DATA"
const GET_COUNTRIES = "GET_COUNTRIES"
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING"

 
const initialState = {
    data: [],
    countries: [],
    selectedUniversity: null,
    isLoading: false
}

const bodyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: return {
            ...state,
            data: [
                ...action.data
            ]
        }
        case GET_COUNTRIES:
            return {
                ...state,
                countries: [...action.countries]
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

const setData = (data) => ({ type: GET_DATA, data })
const setCountries = (countries) => ({ type: GET_COUNTRIES, countries })
const setIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

export const loadCountries = () => (dispatch) => {
    const countries = COUNTRIES.map(m => m)
    dispatch(setCountries(countries))
}

export const getData = (country) => async (dispatch) => {
    dispatch(setIsLoading(true))
    const res = await bodyAPI.getCountry(country)
    dispatch(setData(res))
    dispatch(setIsLoading(false))
}

export default bodyReducer