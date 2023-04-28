import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: any) => any
  // requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  /* requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig */
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  // responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
