import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://yd-backend.onrender.com/api'
})

export const post=(url, data) => instance.post(url, data)
