import axios from "axios"

export default function (config){
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000",
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        return config
    }, error => {
        console.log(error)
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        console.log(error)
    })

    return instance(config)

}