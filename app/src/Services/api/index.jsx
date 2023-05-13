import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://test-frontend-reactjs-eyi8.vercel.app/'
})