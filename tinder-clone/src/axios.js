import axios from 'axios';
const instance = axios.create({
    baseURL:"https://tinder-1908.herokuapp.com",
});
export default instance;