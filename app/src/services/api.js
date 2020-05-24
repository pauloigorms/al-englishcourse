import axios from 'axios'
import { BASE_URL } from './../Utils.js'

export async function get__teachers() {
    const response = await axios.get(BASE_URL+'/teachers')
        .then(res => { return res.data })
    console.log(response)
}

export const getToken = () => JSON.parse(Buffer.from(localStorage.getItem('user'), "base64").toString("ascii")).token
export const isLogged = () => !!localStorage.getItem('user') ? true : false