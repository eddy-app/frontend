/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"

export const useAxios = () => {
  const [accessToken, setAccessToken] = useState(null)
  const [res, setRes] = useState(null)
  const [err, setErr] = useState(null)
  const { getAccessTokenSilently } = useAuth0()

  const getToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently()
      await setAccessToken(token)
    } catch (error) {
      console.log(error)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    getToken()
  }, [getToken])

  const modAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })

  modAxios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${accessToken}`
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  modAxios.interceptors.response.use(
    async response => {
      await setRes(response)
      return response
    },
    async error => {
      const code = error && error.response ? error.response.status : 0
      if (code === 401) await getToken()
      await setErr(error)
      return Promise.reject(error)
    }
  )

  return { modAxios }
}
