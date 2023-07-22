import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { EventItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://dv-student-backend-2019.appspot.com/students',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getStudent(): Promise<AxiosResponse<EventItem[]>> {
        return apiClient.get<EventItem[]>('')
    }
}
