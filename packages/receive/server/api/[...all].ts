export default defineEventHandler(async (event) => {
  const param = getRouterParam(event, 'all')
  const params = param?.split('/')
  const headers = getRequestHeaders(event)

  return {
    params,
    headers,
  }
})
