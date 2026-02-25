import axios from "axios"

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});


api.interceptors.request.use(
    (config) => {

        //console.log(config)
        return config;
    },
    (error)=>{        
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    async (response) => {
        //console.log(response);

        return response;
    },
    async (error)=>{
        return Promise.reject(error);
    }
)

export default api;