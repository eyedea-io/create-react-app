import Syncano from '@syncano/client'

/**
 * Execute request to Syncano.
 */
export function syncano(url: string, data?: object) {
  try {
    const s = new Syncano(process.env.SYNCANO_PROJECT_INSTANCE)
    const token = window.localStorage.getItem('token') || undefined

    s.setToken(token)

    return s.post(url, data, {
      params: {
        // this fixed user_key attached twice to url
        user_key: undefined
      }
    }) as Promise<any>
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err)
  }

  return new Promise(() => {
    // tslint:disable-next-line:no-console
    console.error(`Syncano Client was used without instance name: ${url}`)
  })
}

/**
 * Get url for given endpoint.
 */
syncano.url = (endpoint: string, data?: any) => {
  const s = new Syncano(process.env.SYNCANO_PROJECT_INSTANCE)
  const token = window.localStorage.getItem('token') || undefined
  s.setToken(token)

  return s.url(endpoint, data)
}

/**
 * Create a WebSocket connection with syncano socket.
 */
syncano.subscribe = (url: string, data?: Object): WebSocket => {
  const s = new Syncano(process.env.SYNCANO_PROJECT_INSTANCE)
  const token = window.localStorage.getItem('token')

  return s.listen(url, {token, ...data})
}
