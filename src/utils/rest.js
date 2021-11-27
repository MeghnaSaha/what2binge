import 'axios'
import axios from 'axios'

export const httpGet = (url) => 
    axios({
        method: 'get',
        url: url
    });