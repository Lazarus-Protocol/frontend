import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if(!loaded) {
    return null
  }
  
  return <Component {...pageProps} />
}

export default MyApp
