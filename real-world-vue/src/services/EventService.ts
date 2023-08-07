import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { EventItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/se331-2022/passengerdb/passenger?_page=1&_limit=5',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvent(perPage: number, page: number): Promise<AxiosResponse<EventItem[]>> {
        return apiClient.get<EventItem[]>('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEventById(id: number): Promise<AxiosResponse<EventItem>>{
        return apiClient.get<EventItem>('https://my-json-server.typicode.com/se331-2022/passengerdb/passenger/' + id.toString())
    }
}
