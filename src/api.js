import axios from 'axios'


export default axios.create({
    baseURL: 'https://637a6229702b9830b9ed4bb8.mockapi.io/',
    headers: {
        'content-type': 'application/json'
    }
})