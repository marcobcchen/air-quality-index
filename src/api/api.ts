import axios from 'axios'

const govOpenDataRequest = axios.create({
  baseURL: 'https://data.epa.gov.tw'
})

export const apiAQI = (data = {}) => govOpenDataRequest.get('/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json', data)