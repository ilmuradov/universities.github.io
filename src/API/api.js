import axios from "axios"

const instance = axios.create({
    baseURL: "http://universities.hipolabs.com/",
})

export const bodyAPI = {
    async getCountry(country) {
        const res = await instance.get(`search?country=${country}`)
        return res.data
    }
}