import {useMemo} from 'react'
import axios, {AxiosError} from 'axios'
import qs from 'qs'
import {useToasts} from 'react-toast-notifications'

export function useAxios() {
  const toastHooker = useToasts()

  const factory = () => {
    /**
     * Web Server request & response config
     */
    const axiosInstance = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, {arrayFormat: 'repeat'}), // myendpoint?myarray=1&myarray=2
    })

    /**
     * Interceptor for every HTTP request of this app
     */
    axiosInstance.interceptors.request.use((config) => {
      const pattern = /^(?:https?:)?\/\/[\w.]+[\w-/]+[\w?&=%]*$/g
      const isRelativeUrl = !pattern.exec(config.url || '')

      if (isRelativeUrl) {
        // do stuff
      }

      return config
    })

    /**
     * Interceptor for every HTTP response of this app
     */
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const response = error.response

        if (!response) {
          const message = 'Could not connect to server'

          toastHooker.addToast(message, {appearance: 'error'})
          console.error(message)

          return Promise.reject(message)
        }

        if (response.status >= 400) {
          const status = response.status.toString()
          const message = response.data ?? response.statusText

          toastHooker.addToast(`${status} - ${message}`, {appearance: 'error'})
          console.error(status, message)
        }

        return Promise.reject(error)
      }
    )

    return axiosInstance
  }

  return useMemo(factory, [])
}
