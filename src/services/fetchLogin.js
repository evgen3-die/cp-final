import fetcher from '@/utils/fetcher'
import { API_ENDPOINT } from '@/constants'

const URL = `${API_ENDPOINT}/auth/login`

export default async function (email, password) {
  const { data } = await fetcher.post(URL, { email, password })
  return data.access_token
}
