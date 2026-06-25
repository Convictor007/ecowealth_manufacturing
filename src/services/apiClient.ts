const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '/api'

export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function apiRequest<TResponse, TBody = unknown>(
  path: string,
  options: { method?: string; body?: TBody; signal?: AbortSignal } = {},
): Promise<TResponse> {
  const { method = 'GET', body, signal } = options

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
    signal,
  })

  const isJson = response.headers
    .get('content-type')
    ?.includes('application/json')
  const data = isJson ? await response.json() : null

  if (!response.ok) {
    const message =
      (data && (data.message as string)) ||
      `Request failed with status ${response.status}`
    throw new ApiError(message, response.status)
  }

  return data as TResponse
}
