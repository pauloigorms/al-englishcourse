import axios from 'axios'
import { BASE_URL } from './../Utils.js'

export const get__teachers = () => {
    const response = axios.get(BASE_URL+'/teachers').then(res => res.data)
    return response ? response : []
}

// export const get__comments = () => {
//     const response = await axios.get('BASE_URL'+'/comments').then(res => { res.data })
//     return response.data || []
// }