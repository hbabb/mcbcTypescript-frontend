// mcbcTypescript/frontend/src/hooks/useFetch.ts
import useSWR from 'swr'

import fetcher from '../utils/fetcher'

const useFetch = (url: string) => {
  const { data, error } = useSWR(url, fetcher)
  console.log('Fetching URL: ', url)
  if (error) console.error('Fetching Error: ', error)
  if (data) console.log('Fetched Data: ', data)
  return { data, isLoading: !error && !data, isError: error }
}

export default useFetch
