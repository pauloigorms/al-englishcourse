import axios from 'axios'
import { BASE_URL } from './../Utils.js'

export async function get__teachers() {
    const response = await axios.get(BASE_URL+'/teachers')
        .then(res => { return res.data })
    console.log(response)
}
