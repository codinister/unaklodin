'use client'
import axios from 'axios'

const fetch = axios.create({
    baseURL: '/api'
})
const fetchApi = ({...options}) => {
    return fetch(options)
    .then(data => data)
    .catch(err => err)
}

export default fetchApi