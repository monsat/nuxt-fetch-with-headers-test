type FetchResult = {
  params: string[]
  headers: Record<string, string>
}

export default defineEventHandler(async (event) => {
  const _query = getQuery(event)
  const { path ='/', query } = _query
  const headers = getRequestHeaders(event)

  const baseURL = 'http://localhost:3300'

  const results = await $fetch<FetchResult>(path as string, {
    query,
    headers,
    baseURL,
  })

  return {
    results,
    requestHeaders: headers,
  }
})
