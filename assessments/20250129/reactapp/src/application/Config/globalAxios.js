import axios from 'axios'


//create an axios instance
const axiosInatance = axios.create({
    baseURL : 'http://localhost:9090'
})

// add a request interceptor to include the token in the headers
axiosInatance.interceptors.request.use(
    (config) => {
        // get the token from the local store
        const token = localStorage.getItem('token')

        if(token) {
            //attach token to the request if it exists
            config.headers['Authorization'] = `Bearer ${token}`
    }

    return config 
},
(error) => {
    return Promise.reject(error)
}

)

// catch the response and intercept the error response
axiosInatance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            // Remove the token from localStorage if the API returns 401 or 403 (unauthorized or expired token)
            localStorage.removeItem('token')
            alert('Session expired or you do not have permission. Please login again.')
            window.location.href = '/login'
        } 
        // hnadle the error
        return Promise.reject(error)
    }
)

export default axiosInatance