// mcbcTypescript/frontend/src/utils/fetcher.ts
import axios from './axios'

const fetcher = async (url: string) => {
  const Response = await axios.get(url)
  return Response.data
}

export default fetcher
