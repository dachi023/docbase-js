import axios, { AxiosInstance } from 'axios'

type Args = {
  baseURL: string
  timeout: number
  token: string
  version: number
}

export default function clientFactory({ baseURL, timeout, token, version }: Args): AxiosInstance {
  return axios.create({
    baseURL,
    timeout,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-DocBaseToken': token,
      'X-Api-Version': version
    }
  })
}
