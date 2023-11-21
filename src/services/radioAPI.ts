import axios from 'axios'

// Chamadas pelo lado server com SSR
const api = (ctx?: any) => {
  // const { ['laravel_session']: token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://sonic1.transmissaodigital.com',
    timeout: 10000
  })
  // api.defaults.xsrfCookieName = 'laravel_session'
  // api.defaults.withCredentials = true
  // axios.defaults.headers.common = {
  //   Accept: 'application/json'
  // }

  return api
}

const radioAPI = api()

export default radioAPI
