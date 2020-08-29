import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://burger-reactjs-d175d.firebaseio.com/'
})

export default instance;