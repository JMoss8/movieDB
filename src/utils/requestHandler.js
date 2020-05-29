/**
 * Basic request handler with default error handling.
 *
 * @param makeRequest:    request that should be taken care of, function that returns promise
 * @param onNokResponse:  JSON with error codes (404, 500 etc.) as keys for appropriate error handling functions
 * @param onFinally:      onFinally optional callback
 */
export const requestHandler = async (makeRequest, onNokResponse, onFinally) => {
  try {
    const response = await makeRequest()
    if (!response.ok) {
      (onNokResponse?.[response.status]) ? (
        onNokResponse[response.status](response)
      ) : (
        defaultErrorHandler(response.status + ' ' + response.statusText)
      )
      return {error: true, response}
    }

    return response.json()
  } catch (error) {
    defaultErrorHandler(error)
  } finally {
    if (onFinally) {
      onFinally()
    }
  }
}

export const defaultErrorHandler = error => {
  console.warn(error)
}

export default requestHandler
