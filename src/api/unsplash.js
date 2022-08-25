import axios from "axios";

/*** create allow to create  */ 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID p5aANboX_y4OdI8KZOvAo2IdY5DXBkkUaLPWGWACxNg'
    }
});

