
import axios from 'axios';
import router from '../router';

const axiosClient = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config)=>{
    const token =localStorage.getItem("userToken")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(response=>{
    return response;
}, error =>{
    if (error.response && error.response.status === 401){
        router.navigate('/signup')
        return error;
    }
    throw error;
})


export const logout = () => {
    localStorage.removeItem('userToken'); 
    router.navigate('/signup'); 
};
export default axiosClient;

