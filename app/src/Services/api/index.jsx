import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://test-nodejs-api-u12y.vercel.app/'
})